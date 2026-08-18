"""
TechLens AI — Final Real-World Multimodal Behavior Intelligence API
"""

import json
import os
import urllib.parse
from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from typing import Optional, List, Dict, Any

from services.analysis import run_full_analysis, enhance_with_llm
from services.multimodal_service import (
    scan_multimodal_dataset,
    compute_classification_evaluation,
    find_reels_directory,
    get_reel_file_by_id,
)
from services.inference_engine import (
    run_multimodal_inference,
    TEST_SCENARIOS,
)
from services.robustness_tester import run_all_robustness_tests
from services.video_streamer import stream_video_file

app = FastAPI(
    title="TechLens AI Multimodal API",
    description="Real-world multimodal video understanding & explainable behavioral recommendation engine",
    version="3.2.0",
)

# Allow requests from Vite dev server and production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_PATH = os.path.join(os.path.dirname(__file__), "data", "reels.json")

# Mount real video directory for direct streaming
reels_dir = find_reels_directory()
if reels_dir and os.path.exists(reels_dir):
    app.mount("/api/videos", StaticFiles(directory=reels_dir), name="videos")


@app.get("/")
def root():
    return {
        "status": "ok",
        "service": "TechLens AI Multimodal API v3.2",
        "reels_mounted": bool(reels_dir),
        "total_reels_detected": len(scan_multimodal_dataset())
    }


@app.get("/api/reels")
def get_reels():
    """Return the default sample reel dataset."""
    with open(DATA_PATH, "r") as f:
        return json.load(f)


@app.post("/api/analyze")
def analyze_reels(payload: Optional[dict] = None):
    try:
        if payload and "reels" in payload:
            reels = payload["reels"]
        else:
            with open(DATA_PATH, "r") as f:
                reels = json.load(f)

        if not reels:
            raise HTTPException(status_code=400, detail="No reels provided")

        analysis = run_full_analysis(reels)
        llm_explanation = enhance_with_llm(analysis)
        if llm_explanation:
            analysis["llm_explanation"] = llm_explanation

        return {"success": True, "analysis": analysis}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ─── REAL-WORLD MULTIMODAL EXPERIMENT ENDPOINTS ────────────────

@app.get("/api/experiment/video/{reel_id}")
def stream_experiment_video(reel_id: str, request: Request):
    """
    Streams the requested video file with full HTTP Range (206 Partial Content) support.
    Works seamlessly across all browsers and file naming conventions.
    """
    filepath = get_reel_file_by_id(reel_id)
    if not filepath or not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail=f"Video for reel {reel_id} not found")
    return stream_video_file(filepath, request)


@app.get("/api/experiment/reels")
def get_experiment_reels():
    """
    Dynamically scan the Reels folder, preprocess frames with OpenCV,
    and return all detected video files with separate Content Identity,
    Interest Contribution, and Multimodal Evidence.
    """
    try:
        reels = scan_multimodal_dataset()
        return {
            "success": True,
            "count": len(reels),
            "reels": reels,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/experiment/analyze")
def analyze_experiment(payload: Dict[str, Any]):
    """
    Analyze an interactive experiment session and return behavioral scores,
    calibrated confidence, interest vector, and explainable recommendations.
    """
    try:
        interactions = payload.get("interactions", [])
        weights = payload.get("weights")
        feedback = payload.get("feedback")
        result = run_multimodal_inference(interactions, weights, feedback)
        return {
            "success": True,
            "session": result,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/experiment/evaluation")
def get_evaluation_metrics():
    """
    Returns ground-truth content classification evaluation metrics
    (Precision, Recall, F1 Score, Confusion Matrix).
    """
    try:
        metrics = compute_classification_evaluation()
        return {
            "success": True,
            "evaluation": metrics,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/experiment/robustness")
def get_robustness_test_results():
    """
    Runs live automated tests proving that filename changes and folder changes
    have 0% influence on semantic classification.
    """
    try:
        results = run_all_robustness_tests()
        return {
            "success": True,
            "results": results,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/experiment/scenarios")
def get_test_scenarios():
    """
    Returns the 4 test evaluation scenarios (Scenario A, B, C, D) for judges.
    """
    return {
        "success": True,
        "scenarios": TEST_SCENARIOS,
    }


@app.get("/api/health")
def health():
    return {
        "status": "healthy",
        "reels_detected": len(scan_multimodal_dataset()),
    }
