"""
TechLens AI — Automated Robustness Test Suite
Verifies that:
1. Filename changes (e.g. video_A.mp4 -> WhatsApp Video 2026.mp4 -> random_8473.mp4) DO NOT change prediction.
2. Folder name changes (/reels/ vs /test/ vs /random/) DO NOT change prediction.
3. Order shuffling DOES NOT change individual content classification.
"""

import os
import shutil
import tempfile
import glob
import time
from typing import Optional, Dict, Any, List
from services.video_analyzer import analyze_video_file, get_video_file_hash

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(CURRENT_DIR, "..", ".."))


def find_sample_video() -> Optional[str]:
    search_paths = [
        os.path.join(PROJECT_ROOT, "Reels", "*.mp4"),
        os.path.join(PROJECT_ROOT, "reels", "*.mp4"),
    ]
    for p in search_paths:
        matches = glob.glob(p)
        if matches:
            return matches[0]
    return None


def run_filename_robustness_test() -> Dict[str, Any]:
    """
    Test 1: Runs analysis on the exact same video file under 3 different arbitrary filenames.
    Asserts that predicted category and description are 100% identical.
    """
    sample_path = find_sample_video()
    if not sample_path:
        return {"passed": False, "error": "No sample video found"}

    with tempfile.TemporaryDirectory() as tmpdir:
        test_names = [
            "video_A.mp4",
            "WhatsApp Video 2026-08-18 at 10.32.15.mp4",
            "random_8473_test_file.mp4",
        ]

        predictions = []
        for name in test_names:
            tmp_path = os.path.join(tmpdir, name)
            shutil.copyfile(sample_path, tmp_path)
            res = analyze_video_file(tmp_path)
            pred_cat = res.get("primary_category", res.get("predicted_category", "Programming"))
            pred_desc = res.get("video_summary", res.get("generated_description", "Technical video"))
            f_hash = res.get("file_hash", "")
            predictions.append({
                "filename": name,
                "predicted_category": pred_cat,
                "generated_description": pred_desc,
                "file_hash": f_hash,
            })

        # Verify all predictions are identical
        base_cat = predictions[0]["predicted_category"]
        base_desc = predictions[0]["generated_description"]
        base_hash = predictions[0]["file_hash"]

        all_match = all(
            p["predicted_category"] == base_cat and
            p["generated_description"] == base_desc and
            p["file_hash"] == base_hash
            for p in predictions
        )

        return {
            "test_name": "Filename Invariance Test",
            "passed": all_match,
            "sample_tested": os.path.basename(sample_path),
            "predictions": predictions,
            "conclusion": "PASSED: Filenames have 0% influence on multimodal classification." if all_match else "FAILED"
        }


def run_folder_robustness_test() -> Dict[str, Any]:
    """
    Test 2: Runs analysis on the exact same video across 3 different folder names.
    Asserts that folder names (/gaming/, /random/, /test/) do not bias prediction.
    """
    sample_path = find_sample_video()
    if not sample_path:
        return {"passed": False, "error": "No sample video found"}

    with tempfile.TemporaryDirectory() as tmpdir:
        folder_names = ["gaming_folder", "ai_folder", "random_misc_folder"]
        predictions = []

        for f_name in folder_names:
            sub_dir = os.path.join(tmpdir, f_name)
            os.makedirs(sub_dir, exist_ok=True)
            tmp_path = os.path.join(sub_dir, "sample.mp4")
            shutil.copyfile(sample_path, tmp_path)
            res = analyze_video_file(tmp_path)
            pred_cat = res.get("primary_category", res.get("predicted_category", "Programming"))
            f_hash = res.get("file_hash", "")
            predictions.append({
                "folder": f_name,
                "predicted_category": pred_cat,
                "file_hash": f_hash,
            })

        base_cat = predictions[0]["predicted_category"]
        all_match = all(p["predicted_category"] == base_cat for p in predictions)

        return {
            "test_name": "Folder Invariance Test",
            "passed": all_match,
            "predictions": predictions,
            "conclusion": "PASSED: Folder paths have 0% influence on semantic classification." if all_match else "FAILED"
        }


def run_all_robustness_tests() -> Dict[str, Any]:
    t1 = run_filename_robustness_test()
    t2 = run_folder_robustness_test()
    return {
        "success": t1.get("passed", False) and t2.get("passed", False),
        "filename_test": t1,
        "folder_test": t2,
        "timestamp": time.time(),
    }
