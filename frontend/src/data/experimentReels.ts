import type { ExperimentReel, ClassificationEvaluation } from '../types';

export const STATIC_EXPERIMENT_REELS: ExperimentReel[] = [
  {
    "id": "real_reel_01",
    "index": 1,
    "filename": "WhatsApp Video 2026-08-18 at 11.29.01 (2).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/DSA_reels/WhatsApp Video 2026-08-18 at 11.29.01 (2).mp4",
    "sourceFolder": "DSA_reels",
    "source_folder": "DSA_reels",
    "datasetLabel": "DSA",
    "dataset_label": "DSA",
    "expectedCategory": "DSA",
    "expected_category": "DSA",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says DSA, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 90,
    "evidenceScores": {
      "visual": 96,
      "ocr": 95,
      "speech": 85,
      "semantic": 94
    },
    "file_hash": "d36b4fd14ba5e99d8665d0567d2a6795b8fa57b6772a45e94af10c8f40f4d5fb",
    "video_url": "/api/experiment/video/real_reel_01",
    "title": "Reel #01: Entertainment",
    "content_identity": {
      "datasetLabel": "DSA",
      "expectedCategory": "DSA",
      "sourceFolder": "DSA_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says DSA, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 90,
      "evidenceScores": {
        "visual": 96,
        "ocr": 95,
        "speech": 85,
        "semantic": 94
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (85%)",
      "ocr_keywords": [
        "On-Screen Code OCR (95%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:06",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:28",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 95%)",
          "confidence": 0.95
        },
        {
          "timestamp": "00:49",
          "description": "Synthesis & engineering takeaways (Speech Score: 85%)",
          "confidence": 0.85
        }
      ],
      "technical_depth": 0.63,
      "learning_value": 0.83,
      "entertainment_value": 0.95,
      "motivation_level": 0.79,
      "hype_risk": 0.14,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.23,
      "evidence_scores": {
        "visual": 96,
        "ocr": 95,
        "speech": 85,
        "semantic": 94
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:06",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:28",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "00:49",
        "description": "Synthesis & engineering takeaways (Speech Score: 85%)",
        "confidence": 0.85
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:06",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:28",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "00:49",
        "description": "Synthesis & engineering takeaways (Speech Score: 85%)",
        "confidence": 0.85
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 63,
    "technicalDepth": 63,
    "educational_value": 83,
    "educationalValue": 83,
    "educational_depth": 0.83,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 79,
    "motivationLevel": 79,
    "hype_score": 0.14,
    "hypeRisk": 14,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 57.6,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#8b5cf6"
  },
  {
    "id": "real_reel_02",
    "index": 2,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.15.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/DSA_reels/WhatsApp Video 2026-08-18 at 11.53.15.mp4",
    "sourceFolder": "DSA_reels",
    "source_folder": "DSA_reels",
    "datasetLabel": "DSA",
    "dataset_label": "DSA",
    "expectedCategory": "DSA",
    "expected_category": "DSA",
    "predictedCategory": "Programming",
    "predicted_category": "Programming",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says DSA, but multimodal analysis detected Programming (Educational) content.",
    "aiConfidence": 66,
    "evidenceScores": {
      "visual": 88,
      "ocr": 51,
      "speech": 79,
      "semantic": 74
    },
    "file_hash": "c57cee295b4b417b71e31581502a78811450f48b80769529c18dd5b97124661a",
    "video_url": "/api/experiment/video/real_reel_02",
    "title": "Reel #02: Programming",
    "content_identity": {
      "datasetLabel": "DSA",
      "expectedCategory": "DSA",
      "sourceFolder": "DSA_reels",
      "predictedCategory": "Programming",
      "category": "Programming",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "Programming",
        "Software Engineering",
        "Tech Tutorial"
      ],
      "primary_tag": "Programming",
      "secondary_tags": [
        "Software Engineering",
        "Tech Tutorial"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says DSA, but multimodal analysis detected Programming (Educational) content.",
      "aiConfidence": 66,
      "evidenceScores": {
        "visual": 88,
        "ocr": 51,
        "speech": 79,
        "semantic": 74
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "Programming": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (88%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (79%)",
      "ocr_keywords": [
        "On-Screen Code OCR (51%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:09",
          "description": "Visual context setup (Programming intro, Visual Score: 88%)",
          "confidence": 0.88
        },
        {
          "timestamp": "00:41",
          "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 51%)",
          "confidence": 0.51
        },
        {
          "timestamp": "01:09",
          "description": "Synthesis & engineering takeaways (Speech Score: 79%)",
          "confidence": 0.79
        }
      ],
      "technical_depth": 0.81,
      "learning_value": 0.73,
      "entertainment_value": 0.28,
      "motivation_level": 0.48,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.25,
      "evidence_scores": {
        "visual": 88,
        "ocr": 51,
        "speech": 79,
        "semantic": 74
      }
    },
    "generated_description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 81%).",
    "summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 81%).",
    "video_summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 81%).",
    "detected_topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "primaryCategory": "Programming",
    "category": "Programming",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:09",
        "description": "Visual context setup (Programming intro, Visual Score: 88%)",
        "confidence": 0.88
      },
      {
        "timestamp": "00:41",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 51%)",
        "confidence": 0.51
      },
      {
        "timestamp": "01:09",
        "description": "Synthesis & engineering takeaways (Speech Score: 79%)",
        "confidence": 0.79
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:09",
        "description": "Visual context setup (Programming intro, Visual Score: 88%)",
        "confidence": 0.88
      },
      {
        "timestamp": "00:41",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 51%)",
        "confidence": 0.51
      },
      {
        "timestamp": "01:09",
        "description": "Synthesis & engineering takeaways (Speech Score: 79%)",
        "confidence": 0.79
      }
    ],
    "topic": "Programming",
    "subtopic": "Software Engineering",
    "technical_depth": 81,
    "technicalDepth": 81,
    "educational_value": 73,
    "educationalValue": 73,
    "educational_depth": 0.73,
    "entertainment_value": 28,
    "entertainmentValue": 28,
    "motivation_level": 48,
    "motivationLevel": 48,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.88,
    "duration": 82.0,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 81%).",
    "thumbnail_color": "#8b5cf6"
  },
  {
    "id": "real_reel_03",
    "index": 3,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.17 (2).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/DSA_reels/WhatsApp Video 2026-08-18 at 11.53.17 (2).mp4",
    "sourceFolder": "DSA_reels",
    "source_folder": "DSA_reels",
    "datasetLabel": "DSA",
    "dataset_label": "DSA",
    "expectedCategory": "DSA",
    "expected_category": "DSA",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says DSA, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 65,
    "evidenceScores": {
      "visual": 82,
      "ocr": 50,
      "speech": 85,
      "semantic": 74
    },
    "file_hash": "976fdcef9262a12ef0d8962357542ba781a990af0db9b2952f5aa52d1d7af949",
    "video_url": "/api/experiment/video/real_reel_03",
    "title": "Reel #03: Entertainment",
    "content_identity": {
      "datasetLabel": "DSA",
      "expectedCategory": "DSA",
      "sourceFolder": "DSA_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says DSA, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 65,
      "evidenceScores": {
        "visual": 82,
        "ocr": 50,
        "speech": 85,
        "semantic": 74
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (82%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (85%)",
      "ocr_keywords": [
        "On-Screen Code OCR (50%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (Entertainment intro, Visual Score: 82%)",
          "confidence": 0.82
        },
        {
          "timestamp": "00:07",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
          "confidence": 0.5
        },
        {
          "timestamp": "00:11",
          "description": "Synthesis & engineering takeaways (Speech Score: 85%)",
          "confidence": 0.85
        }
      ],
      "technical_depth": 0.47,
      "learning_value": 0.54,
      "entertainment_value": 0.95,
      "motivation_level": 0.78,
      "hype_risk": 0.12,
      "difficulty": "Beginner",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.16,
      "evidence_scores": {
        "visual": 82,
        "ocr": 50,
        "speech": 85,
        "semantic": 74
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Entertainment intro, Visual Score: 82%)",
        "confidence": 0.82
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:11",
        "description": "Synthesis & engineering takeaways (Speech Score: 85%)",
        "confidence": 0.85
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Entertainment intro, Visual Score: 82%)",
        "confidence": 0.82
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:11",
        "description": "Synthesis & engineering takeaways (Speech Score: 85%)",
        "confidence": 0.85
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 47,
    "technicalDepth": 47,
    "educational_value": 54,
    "educationalValue": 54,
    "educational_depth": 0.54,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 78,
    "motivationLevel": 78,
    "hype_score": 0.12,
    "hypeRisk": 12,
    "difficulty": "Beginner",
    "career_relevance": 0.45,
    "duration": 14.0,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#8b5cf6"
  },
  {
    "id": "real_reel_04",
    "index": 4,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.17.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/DSA_reels/WhatsApp Video 2026-08-18 at 11.53.17.mp4",
    "sourceFolder": "DSA_reels",
    "source_folder": "DSA_reels",
    "datasetLabel": "DSA",
    "dataset_label": "DSA",
    "expectedCategory": "DSA",
    "expected_category": "DSA",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "MATCH",
    "label_status": "MATCH",
    "groundTruthMatch": "PASS",
    "ground_truth_match": "PASS",
    "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on DSA.",
    "aiConfidence": 87,
    "evidenceScores": {
      "visual": 90,
      "ocr": 95,
      "speech": 83,
      "semantic": 91
    },
    "file_hash": "1ac76aff33f9eb3f59943d51da64e07ca52f2c6832fbf48118fdd8860e549745",
    "video_url": "/api/experiment/video/real_reel_04",
    "title": "Reel #04: DSA",
    "content_identity": {
      "datasetLabel": "DSA",
      "expectedCategory": "DSA",
      "sourceFolder": "DSA_reels",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "MATCH",
      "groundTruthMatch": "PASS",
      "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on DSA.",
      "aiConfidence": 87,
      "evidenceScores": {
        "visual": 90,
        "ocr": 95,
        "speech": 83,
        "semantic": 91
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (90%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (83%)",
      "ocr_keywords": [
        "On-Screen Code OCR (95%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:17",
          "description": "Visual context setup (DSA intro, Visual Score: 90%)",
          "confidence": 0.9
        },
        {
          "timestamp": "01:11",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 95%)",
          "confidence": 0.95
        },
        {
          "timestamp": "02:01",
          "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
          "confidence": 0.83
        }
      ],
      "technical_depth": 0.91,
      "learning_value": 0.79,
      "entertainment_value": 0.48,
      "motivation_level": 0.66,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.26,
      "evidence_scores": {
        "visual": 90,
        "ocr": 95,
        "speech": 83,
        "semantic": 91
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 91%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 91%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 91%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:17",
        "description": "Visual context setup (DSA intro, Visual Score: 90%)",
        "confidence": 0.9
      },
      {
        "timestamp": "01:11",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "02:01",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:17",
        "description": "Visual context setup (DSA intro, Visual Score: 90%)",
        "confidence": 0.9
      },
      {
        "timestamp": "01:11",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "02:01",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 91,
    "technicalDepth": 91,
    "educational_value": 79,
    "educationalValue": 79,
    "educational_depth": 0.79,
    "entertainment_value": 48,
    "entertainmentValue": 48,
    "motivation_level": 66,
    "motivationLevel": 66,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 142.5,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 91%).",
    "thumbnail_color": "#8b5cf6"
  },
  {
    "id": "real_reel_05",
    "index": 5,
    "filename": "WhatsApp Video 2026-08-18 at 11.28.06.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Funny_reels/WhatsApp Video 2026-08-18 at 11.28.06.mp4",
    "sourceFolder": "Funny_reels",
    "source_folder": "Funny_reels",
    "datasetLabel": "Entertainment",
    "dataset_label": "Entertainment",
    "expectedCategory": "Entertainment",
    "expected_category": "Entertainment",
    "predictedCategory": "Programming",
    "predicted_category": "Programming",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected Programming (Educational) content.",
    "aiConfidence": 73,
    "evidenceScores": {
      "visual": 95,
      "ocr": 59,
      "speech": 83,
      "semantic": 81
    },
    "file_hash": "5340bd36fdf00932e25fa415f723a9eb2916a4717a7a1821ce8c24b1c5dc418a",
    "video_url": "/api/experiment/video/real_reel_05",
    "title": "Reel #05: Programming",
    "content_identity": {
      "datasetLabel": "Entertainment",
      "expectedCategory": "Entertainment",
      "sourceFolder": "Funny_reels",
      "predictedCategory": "Programming",
      "category": "Programming",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "Programming",
        "Software Engineering",
        "Tech Tutorial"
      ],
      "primary_tag": "Programming",
      "secondary_tags": [
        "Software Engineering",
        "Tech Tutorial"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected Programming (Educational) content.",
      "aiConfidence": 73,
      "evidenceScores": {
        "visual": 95,
        "ocr": 59,
        "speech": 83,
        "semantic": 81
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "Programming": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (95%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (83%)",
      "ocr_keywords": [
        "On-Screen Code OCR (59%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:02",
          "description": "Visual context setup (Programming intro, Visual Score: 95%)",
          "confidence": 0.95
        },
        {
          "timestamp": "00:08",
          "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 59%)",
          "confidence": 0.59
        },
        {
          "timestamp": "00:15",
          "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
          "confidence": 0.83
        }
      ],
      "technical_depth": 0.86,
      "learning_value": 0.78,
      "entertainment_value": 0.52,
      "motivation_level": 0.65,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.19,
      "evidence_scores": {
        "visual": 95,
        "ocr": 59,
        "speech": 83,
        "semantic": 81
      }
    },
    "generated_description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 86%).",
    "summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 86%).",
    "video_summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 86%).",
    "detected_topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "primaryCategory": "Programming",
    "category": "Programming",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (Programming intro, Visual Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "00:08",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 59%)",
        "confidence": 0.59
      },
      {
        "timestamp": "00:15",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (Programming intro, Visual Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "00:08",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 59%)",
        "confidence": 0.59
      },
      {
        "timestamp": "00:15",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "topic": "Programming",
    "subtopic": "Software Engineering",
    "technical_depth": 86,
    "technicalDepth": 86,
    "educational_value": 78,
    "educationalValue": 78,
    "educational_depth": 0.78,
    "entertainment_value": 52,
    "entertainmentValue": 52,
    "motivation_level": 65,
    "motivationLevel": 65,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.88,
    "duration": 17.7,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 86%).",
    "thumbnail_color": "#ec4899"
  },
  {
    "id": "real_reel_06",
    "index": 6,
    "filename": "WhatsApp Video 2026-08-18 at 11.28.13.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Funny_reels/WhatsApp Video 2026-08-18 at 11.28.13.mp4",
    "sourceFolder": "Funny_reels",
    "source_folder": "Funny_reels",
    "datasetLabel": "Entertainment",
    "dataset_label": "Entertainment",
    "expectedCategory": "Entertainment",
    "expected_category": "Entertainment",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 80,
    "evidenceScores": {
      "visual": 89,
      "ocr": 77,
      "speech": 81,
      "semantic": 84
    },
    "file_hash": "62d3c9f238cb6aef2c00f82f681602d73aa4773fcaf1f1801db79e96f35318ea",
    "video_url": "/api/experiment/video/real_reel_06",
    "title": "Reel #06: DSA",
    "content_identity": {
      "datasetLabel": "Entertainment",
      "expectedCategory": "Entertainment",
      "sourceFolder": "Funny_reels",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 80,
      "evidenceScores": {
        "visual": 89,
        "ocr": 77,
        "speech": 81,
        "semantic": 84
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (89%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (81%)",
      "ocr_keywords": [
        "On-Screen Code OCR (77%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (DSA intro, Visual Score: 89%)",
          "confidence": 0.89
        },
        {
          "timestamp": "00:04",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 77%)",
          "confidence": 0.77
        },
        {
          "timestamp": "00:07",
          "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
          "confidence": 0.81
        }
      ],
      "technical_depth": 0.94,
      "learning_value": 0.81,
      "entertainment_value": 0.36,
      "motivation_level": 0.57,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.19,
      "evidence_scores": {
        "visual": 89,
        "ocr": 77,
        "speech": 81,
        "semantic": 84
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 89%)",
        "confidence": 0.89
      },
      {
        "timestamp": "00:04",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 77%)",
        "confidence": 0.77
      },
      {
        "timestamp": "00:07",
        "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
        "confidence": 0.81
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 89%)",
        "confidence": 0.89
      },
      {
        "timestamp": "00:04",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 77%)",
        "confidence": 0.77
      },
      {
        "timestamp": "00:07",
        "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
        "confidence": 0.81
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 94,
    "technicalDepth": 94,
    "educational_value": 81,
    "educationalValue": 81,
    "educational_depth": 0.81,
    "entertainment_value": 36,
    "entertainmentValue": 36,
    "motivation_level": 57,
    "motivationLevel": 57,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 9.1,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "thumbnail_color": "#ec4899"
  },
  {
    "id": "real_reel_07",
    "index": 7,
    "filename": "WhatsApp Video 2026-08-18 at 11.28.46 (1).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Funny_reels/WhatsApp Video 2026-08-18 at 11.28.46 (1).mp4",
    "sourceFolder": "Funny_reels",
    "source_folder": "Funny_reels",
    "datasetLabel": "Entertainment",
    "dataset_label": "Entertainment",
    "expectedCategory": "Entertainment",
    "expected_category": "Entertainment",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 83,
    "evidenceScores": {
      "visual": 82,
      "ocr": 93,
      "speech": 81,
      "semantic": 87
    },
    "file_hash": "786d65632cbf9d6ecbc1230d6f300cd05b4185adb5cddf65c506197c59a0d781",
    "video_url": "/api/experiment/video/real_reel_07",
    "title": "Reel #07: DSA",
    "content_identity": {
      "datasetLabel": "Entertainment",
      "expectedCategory": "Entertainment",
      "sourceFolder": "Funny_reels",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 83,
      "evidenceScores": {
        "visual": 82,
        "ocr": 93,
        "speech": 81,
        "semantic": 87
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (82%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (81%)",
      "ocr_keywords": [
        "On-Screen Code OCR (93%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (DSA intro, Visual Score: 82%)",
          "confidence": 0.82
        },
        {
          "timestamp": "00:07",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 93%)",
          "confidence": 0.93
        },
        {
          "timestamp": "00:12",
          "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
          "confidence": 0.81
        }
      ],
      "technical_depth": 0.87,
      "learning_value": 0.78,
      "entertainment_value": 0.35,
      "motivation_level": 0.58,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.19,
      "evidence_scores": {
        "visual": 82,
        "ocr": 93,
        "speech": 81,
        "semantic": 87
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 82%)",
        "confidence": 0.82
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 93%)",
        "confidence": 0.93
      },
      {
        "timestamp": "00:12",
        "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
        "confidence": 0.81
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 82%)",
        "confidence": 0.82
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 93%)",
        "confidence": 0.93
      },
      {
        "timestamp": "00:12",
        "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
        "confidence": 0.81
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 87,
    "technicalDepth": 87,
    "educational_value": 78,
    "educationalValue": 78,
    "educational_depth": 0.78,
    "entertainment_value": 35,
    "entertainmentValue": 35,
    "motivation_level": 58,
    "motivationLevel": 58,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.88,
    "duration": 14.8,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "thumbnail_color": "#ec4899"
  },
  {
    "id": "real_reel_08",
    "index": 8,
    "filename": "WhatsApp Video 2026-08-18 at 11.28.46 (2).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Funny_reels/WhatsApp Video 2026-08-18 at 11.28.46 (2).mp4",
    "sourceFolder": "Funny_reels",
    "source_folder": "Funny_reels",
    "datasetLabel": "Entertainment",
    "dataset_label": "Entertainment",
    "expectedCategory": "Entertainment",
    "expected_category": "Entertainment",
    "predictedCategory": "Motivational",
    "predicted_category": "Motivational",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected Motivational (Motivational) content.",
    "aiConfidence": 74,
    "evidenceScores": {
      "visual": 96,
      "ocr": 61,
      "speech": 84,
      "semantic": 82
    },
    "file_hash": "8141a8b2c3ef60b6e7493121770a5738b7cce192d9c5b9486a6c2336bada9c21",
    "video_url": "/api/experiment/video/real_reel_08",
    "title": "Reel #08: Motivational",
    "content_identity": {
      "datasetLabel": "Entertainment",
      "expectedCategory": "Entertainment",
      "sourceFolder": "Funny_reels",
      "predictedCategory": "Motivational",
      "category": "Motivational",
      "contentType": "Motivational",
      "content_type": "Motivational",
      "topics": [
        "Motivational",
        "Career Mindset",
        "Consistency",
        "Engineering Growth"
      ],
      "primary_tag": "Motivational",
      "secondary_tags": [
        "Career Mindset",
        "Consistency",
        "Engineering Growth"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Entertainment, but multimodal analysis detected Motivational (Motivational) content.",
      "aiConfidence": 74,
      "evidenceScores": {
        "visual": 96,
        "ocr": 61,
        "speech": 84,
        "semantic": 82
      }
    },
    "interest_contribution": {
      "Career & Engineering Mindset": 0.9,
      "Software Engineering": 0.6
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (84%)",
      "ocr_keywords": [
        "On-Screen Code OCR (61%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (Motivational intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:06",
          "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 61%)",
          "confidence": 0.61
        },
        {
          "timestamp": "00:10",
          "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
          "confidence": 0.84
        }
      ],
      "technical_depth": 0.85,
      "learning_value": 0.78,
      "entertainment_value": 0.88,
      "motivation_level": 0.7,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.2,
      "evidence_scores": {
        "visual": 96,
        "ocr": 61,
        "speech": 84,
        "semantic": 82
      }
    },
    "generated_description": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 70%).",
    "summary": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 70%).",
    "video_summary": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 70%).",
    "detected_topics": [
      "Motivational",
      "Career Mindset",
      "Consistency",
      "Engineering Growth"
    ],
    "topics": [
      "Motivational",
      "Career Mindset",
      "Consistency",
      "Engineering Growth"
    ],
    "primaryCategory": "Motivational",
    "category": "Motivational",
    "contentType": "Motivational",
    "content_type": "Motivational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Motivational intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:06",
        "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 61%)",
        "confidence": 0.61
      },
      {
        "timestamp": "00:10",
        "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
        "confidence": 0.84
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Motivational intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:06",
        "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 61%)",
        "confidence": 0.61
      },
      {
        "timestamp": "00:10",
        "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
        "confidence": 0.84
      }
    ],
    "topic": "Motivational",
    "subtopic": "Career Mindset",
    "technical_depth": 85,
    "technicalDepth": 85,
    "educational_value": 78,
    "educationalValue": 78,
    "educational_depth": 0.78,
    "entertainment_value": 88,
    "entertainmentValue": 88,
    "motivation_level": 70,
    "motivationLevel": 70,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 12.1,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 70%).",
    "thumbnail_color": "#ec4899"
  },
  {
    "id": "real_reel_09",
    "index": 9,
    "filename": "WhatsApp Video 2026-08-18 at 11.29.01.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Funny_reels/WhatsApp Video 2026-08-18 at 11.29.01.mp4",
    "sourceFolder": "Funny_reels",
    "source_folder": "Funny_reels",
    "datasetLabel": "Entertainment",
    "dataset_label": "Entertainment",
    "expectedCategory": "Entertainment",
    "expected_category": "Entertainment",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "MATCH",
    "label_status": "MATCH",
    "groundTruthMatch": "PASS",
    "ground_truth_match": "PASS",
    "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Entertainment.",
    "aiConfidence": 86,
    "evidenceScores": {
      "visual": 96,
      "ocr": 83,
      "speech": 86,
      "semantic": 90
    },
    "file_hash": "a8cabe3d922ea67632d36c5b4e728d70fb11a3423e69ab54287a1c0e78020eef",
    "video_url": "/api/experiment/video/real_reel_09",
    "title": "Reel #09: Entertainment",
    "content_identity": {
      "datasetLabel": "Entertainment",
      "expectedCategory": "Entertainment",
      "sourceFolder": "Funny_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "MATCH",
      "groundTruthMatch": "PASS",
      "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Entertainment.",
      "aiConfidence": 86,
      "evidenceScores": {
        "visual": 96,
        "ocr": 83,
        "speech": 86,
        "semantic": 90
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (86%)",
      "ocr_keywords": [
        "On-Screen Code OCR (83%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:04",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:20",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 83%)",
          "confidence": 0.83
        },
        {
          "timestamp": "00:34",
          "description": "Synthesis & engineering takeaways (Speech Score: 86%)",
          "confidence": 0.86
        }
      ],
      "technical_depth": 0.61,
      "learning_value": 0.81,
      "entertainment_value": 0.95,
      "motivation_level": 0.8,
      "hype_risk": 0.15,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.2,
      "evidence_scores": {
        "visual": 96,
        "ocr": 83,
        "speech": 86,
        "semantic": 90
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:20",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 83%)",
        "confidence": 0.83
      },
      {
        "timestamp": "00:34",
        "description": "Synthesis & engineering takeaways (Speech Score: 86%)",
        "confidence": 0.86
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:20",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 83%)",
        "confidence": 0.83
      },
      {
        "timestamp": "00:34",
        "description": "Synthesis & engineering takeaways (Speech Score: 86%)",
        "confidence": 0.86
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 61,
    "technicalDepth": 61,
    "educational_value": 81,
    "educationalValue": 81,
    "educational_depth": 0.81,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 80,
    "motivationLevel": 80,
    "hype_score": 0.15,
    "hypeRisk": 15,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 40.6,
    "width": 368,
    "height": 464,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#ec4899"
  },
  {
    "id": "real_reel_10",
    "index": 10,
    "filename": "WhatsApp Video 2026-08-18 at 11.28.03.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.28.03.mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Programming",
    "predicted_category": "Programming",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Programming (Educational) content.",
    "aiConfidence": 71,
    "evidenceScores": {
      "visual": 83,
      "ocr": 64,
      "speech": 75,
      "semantic": 76
    },
    "file_hash": "ef1a315c359019c7565385cbd5bc7137c3870bcbded80631ec5e5d4f059c6d12",
    "video_url": "/api/experiment/video/real_reel_10",
    "title": "Reel #10: Programming",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Programming",
      "category": "Programming",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "Programming",
        "Software Engineering",
        "Tech Tutorial"
      ],
      "primary_tag": "Programming",
      "secondary_tags": [
        "Software Engineering",
        "Tech Tutorial"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Programming (Educational) content.",
      "aiConfidence": 71,
      "evidenceScores": {
        "visual": 83,
        "ocr": 64,
        "speech": 75,
        "semantic": 76
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "Programming": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (83%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (75%)",
      "ocr_keywords": [
        "On-Screen Code OCR (64%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (Programming intro, Visual Score: 83%)",
          "confidence": 0.83
        },
        {
          "timestamp": "00:06",
          "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 64%)",
          "confidence": 0.64
        },
        {
          "timestamp": "00:11",
          "description": "Synthesis & engineering takeaways (Speech Score: 75%)",
          "confidence": 0.75
        }
      ],
      "technical_depth": 0.96,
      "learning_value": 0.83,
      "entertainment_value": 0.21,
      "motivation_level": 0.27,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.18,
      "evidence_scores": {
        "visual": 83,
        "ocr": 64,
        "speech": 75,
        "semantic": 76
      }
    },
    "generated_description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 96%).",
    "summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 96%).",
    "video_summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 96%).",
    "detected_topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "primaryCategory": "Programming",
    "category": "Programming",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Programming intro, Visual Score: 83%)",
        "confidence": 0.83
      },
      {
        "timestamp": "00:06",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 64%)",
        "confidence": 0.64
      },
      {
        "timestamp": "00:11",
        "description": "Synthesis & engineering takeaways (Speech Score: 75%)",
        "confidence": 0.75
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Programming intro, Visual Score: 83%)",
        "confidence": 0.83
      },
      {
        "timestamp": "00:06",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 64%)",
        "confidence": 0.64
      },
      {
        "timestamp": "00:11",
        "description": "Synthesis & engineering takeaways (Speech Score: 75%)",
        "confidence": 0.75
      }
    ],
    "topic": "Programming",
    "subtopic": "Software Engineering",
    "technical_depth": 96,
    "technicalDepth": 96,
    "educational_value": 83,
    "educationalValue": 83,
    "educational_depth": 0.83,
    "entertainment_value": 21,
    "entertainmentValue": 21,
    "motivation_level": 27,
    "motivationLevel": 27,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 13.1,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 96%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_11",
    "index": 11,
    "filename": "WhatsApp Video 2026-08-18 at 11.28.46.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.28.46.mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 82,
    "evidenceScores": {
      "visual": 95,
      "ocr": 80,
      "speech": 80,
      "semantic": 87
    },
    "file_hash": "b37600604ee198d6b6b8935e12a4ef249b2e97d348b75647ecb9fe2fda65d23b",
    "video_url": "/api/experiment/video/real_reel_11",
    "title": "Reel #11: DSA",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 82,
      "evidenceScores": {
        "visual": 95,
        "ocr": 80,
        "speech": 80,
        "semantic": 87
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (95%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (80%)",
      "ocr_keywords": [
        "On-Screen Code OCR (80%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (DSA intro, Visual Score: 95%)",
          "confidence": 0.95
        },
        {
          "timestamp": "00:07",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 80%)",
          "confidence": 0.8
        },
        {
          "timestamp": "00:12",
          "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
          "confidence": 0.8
        }
      ],
      "technical_depth": 0.9,
      "learning_value": 0.8,
      "entertainment_value": 0.43,
      "motivation_level": 0.54,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.19,
      "evidence_scores": {
        "visual": 95,
        "ocr": 80,
        "speech": 80,
        "semantic": 87
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 80%)",
        "confidence": 0.8
      },
      {
        "timestamp": "00:12",
        "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
        "confidence": 0.8
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 95%)",
        "confidence": 0.95
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 80%)",
        "confidence": 0.8
      },
      {
        "timestamp": "00:12",
        "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
        "confidence": 0.8
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 90,
    "technicalDepth": 90,
    "educational_value": 80,
    "educationalValue": 80,
    "educational_depth": 0.8,
    "entertainment_value": 43,
    "entertainmentValue": 43,
    "motivation_level": 54,
    "motivationLevel": 54,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 14.6,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_12",
    "index": 12,
    "filename": "WhatsApp Video 2026-08-18 at 11.29.01 (1).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.29.01 (1).mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 75,
    "evidenceScores": {
      "visual": 96,
      "ocr": 67,
      "speech": 79,
      "semantic": 82
    },
    "file_hash": "c9507609315b7f6f8886be0ca5d666cbf8058a29bcb9194334a438a89f02c8b5",
    "video_url": "/api/experiment/video/real_reel_12",
    "title": "Reel #12: Entertainment",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 75,
      "evidenceScores": {
        "visual": 96,
        "ocr": 67,
        "speech": 79,
        "semantic": 82
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (79%)",
      "ocr_keywords": [
        "On-Screen Code OCR (67%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:03",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:14",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 67%)",
          "confidence": 0.67
        },
        {
          "timestamp": "00:24",
          "description": "Synthesis & engineering takeaways (Speech Score: 79%)",
          "confidence": 0.79
        }
      ],
      "technical_depth": 0.74,
      "learning_value": 0.75,
      "entertainment_value": 0.95,
      "motivation_level": 0.45,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.25,
      "evidence_scores": {
        "visual": 96,
        "ocr": 67,
        "speech": 79,
        "semantic": 82
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:03",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:14",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 67%)",
        "confidence": 0.67
      },
      {
        "timestamp": "00:24",
        "description": "Synthesis & engineering takeaways (Speech Score: 79%)",
        "confidence": 0.79
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:03",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:14",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 67%)",
        "confidence": 0.67
      },
      {
        "timestamp": "00:24",
        "description": "Synthesis & engineering takeaways (Speech Score: 79%)",
        "confidence": 0.79
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 74,
    "technicalDepth": 74,
    "educational_value": 75,
    "educationalValue": 75,
    "educational_depth": 0.75,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 45,
    "motivationLevel": 45,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 28.4,
    "width": 848,
    "height": 478,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_13",
    "index": 13,
    "filename": "WhatsApp Video 2026-08-18 at 11.29.02 (1).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.29.02 (1).mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 78,
    "evidenceScores": {
      "visual": 96,
      "ocr": 70,
      "speech": 81,
      "semantic": 84
    },
    "file_hash": "2d0592458adea85b64ea1ff06906e77714a3a5a9e826656db07efdac7d40d9d7",
    "video_url": "/api/experiment/video/real_reel_13",
    "title": "Reel #13: DSA",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 78,
      "evidenceScores": {
        "visual": 96,
        "ocr": 70,
        "speech": 81,
        "semantic": 84
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (81%)",
      "ocr_keywords": [
        "On-Screen Code OCR (70%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:02",
          "description": "Visual context setup (DSA intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:09",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 70%)",
          "confidence": 0.7
        },
        {
          "timestamp": "00:16",
          "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
          "confidence": 0.81
        }
      ],
      "technical_depth": 0.94,
      "learning_value": 0.83,
      "entertainment_value": 0.74,
      "motivation_level": 0.56,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.21,
      "evidence_scores": {
        "visual": 96,
        "ocr": 70,
        "speech": 81,
        "semantic": 84
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:09",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 70%)",
        "confidence": 0.7
      },
      {
        "timestamp": "00:16",
        "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
        "confidence": 0.81
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:09",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 70%)",
        "confidence": 0.7
      },
      {
        "timestamp": "00:16",
        "description": "Synthesis & engineering takeaways (Speech Score: 81%)",
        "confidence": 0.81
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 94,
    "technicalDepth": 94,
    "educational_value": 83,
    "educationalValue": 83,
    "educational_depth": 0.83,
    "entertainment_value": 74,
    "entertainmentValue": 74,
    "motivation_level": 56,
    "motivationLevel": 56,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 19.9,
    "width": 476,
    "height": 848,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 94%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_14",
    "index": 14,
    "filename": "WhatsApp Video 2026-08-18 at 11.29.02.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.29.02.mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 88,
    "evidenceScores": {
      "visual": 96,
      "ocr": 91,
      "speech": 84,
      "semantic": 92
    },
    "file_hash": "4b13f8cb4fe72b28625a4d05ecb132228a1d25abac83d4b3739aeb64ac997904",
    "video_url": "/api/experiment/video/real_reel_14",
    "title": "Reel #14: Entertainment",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 88,
      "evidenceScores": {
        "visual": 96,
        "ocr": 91,
        "speech": 84,
        "semantic": 92
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (84%)",
      "ocr_keywords": [
        "On-Screen Code OCR (91%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:02",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:08",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 91%)",
          "confidence": 0.91
        },
        {
          "timestamp": "00:14",
          "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
          "confidence": 0.84
        }
      ],
      "technical_depth": 0.72,
      "learning_value": 0.75,
      "entertainment_value": 0.95,
      "motivation_level": 0.74,
      "hype_risk": 0.16,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.2,
      "evidence_scores": {
        "visual": 96,
        "ocr": 91,
        "speech": 84,
        "semantic": 92
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:08",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 91%)",
        "confidence": 0.91
      },
      {
        "timestamp": "00:14",
        "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
        "confidence": 0.84
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:08",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 91%)",
        "confidence": 0.91
      },
      {
        "timestamp": "00:14",
        "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
        "confidence": 0.84
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 72,
    "technicalDepth": 72,
    "educational_value": 75,
    "educationalValue": 75,
    "educational_depth": 0.75,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 74,
    "motivationLevel": 74,
    "hype_score": 0.16,
    "hypeRisk": 16,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 17.0,
    "width": 496,
    "height": 368,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_15",
    "index": 15,
    "filename": "WhatsApp Video 2026-08-18 at 11.50.49.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.50.49.mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 66,
    "evidenceScores": {
      "visual": 96,
      "ocr": 50,
      "speech": 77,
      "semantic": 76
    },
    "file_hash": "bd2e33656b3b38adcb0d8e6440415d01f1563dcd732e89afe10856a845772cd8",
    "video_url": "/api/experiment/video/real_reel_15",
    "title": "Reel #15: Entertainment",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 66,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 77,
        "semantic": 76
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (77%)",
      "ocr_keywords": [
        "On-Screen Code OCR (50%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:02",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:09",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
          "confidence": 0.5
        },
        {
          "timestamp": "00:16",
          "description": "Synthesis & engineering takeaways (Speech Score: 77%)",
          "confidence": 0.77
        }
      ],
      "technical_depth": 0.74,
      "learning_value": 0.7,
      "entertainment_value": 0.95,
      "motivation_level": 0.37,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.18,
      "evidence_scores": {
        "visual": 96,
        "ocr": 50,
        "speech": 77,
        "semantic": 76
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:09",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:16",
        "description": "Synthesis & engineering takeaways (Speech Score: 77%)",
        "confidence": 0.77
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:02",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:09",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:16",
        "description": "Synthesis & engineering takeaways (Speech Score: 77%)",
        "confidence": 0.77
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 74,
    "technicalDepth": 74,
    "educational_value": 70,
    "educationalValue": 70,
    "educational_depth": 0.7,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 37,
    "motivationLevel": 37,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 19.4,
    "width": 848,
    "height": 476,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_16",
    "index": 16,
    "filename": "WhatsApp Video 2026-08-18 at 11.50.58.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.50.58.mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 70,
    "evidenceScores": {
      "visual": 96,
      "ocr": 58,
      "speech": 77,
      "semantic": 79
    },
    "file_hash": "5bb0ffad080f5918668b6919a36d675088448bc37475255a004f883b997a1b99",
    "video_url": "/api/experiment/video/real_reel_16",
    "title": "Reel #16: Entertainment",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 70,
      "evidenceScores": {
        "visual": 96,
        "ocr": 58,
        "speech": 77,
        "semantic": 79
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (77%)",
      "ocr_keywords": [
        "On-Screen Code OCR (58%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:05",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:23",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 58%)",
          "confidence": 0.58
        },
        {
          "timestamp": "00:39",
          "description": "Synthesis & engineering takeaways (Speech Score: 77%)",
          "confidence": 0.77
        }
      ],
      "technical_depth": 0.65,
      "learning_value": 0.82,
      "entertainment_value": 0.95,
      "motivation_level": 0.38,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.3,
      "evidence_scores": {
        "visual": 96,
        "ocr": 58,
        "speech": 77,
        "semantic": 79
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:05",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:23",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 58%)",
        "confidence": 0.58
      },
      {
        "timestamp": "00:39",
        "description": "Synthesis & engineering takeaways (Speech Score: 77%)",
        "confidence": 0.77
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:05",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:23",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 58%)",
        "confidence": 0.58
      },
      {
        "timestamp": "00:39",
        "description": "Synthesis & engineering takeaways (Speech Score: 77%)",
        "confidence": 0.77
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 65,
    "technicalDepth": 65,
    "educational_value": 82,
    "educationalValue": 82,
    "educational_depth": 0.82,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 38,
    "motivationLevel": 38,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 46.8,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_17",
    "index": 17,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.14 (1).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.53.14 (1).mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 83,
    "evidenceScores": {
      "visual": 96,
      "ocr": 81,
      "speech": 82,
      "semantic": 88
    },
    "file_hash": "ef7a93d282f8c2df96605fc4eeeb6ab31a121c0d773fe7f77690dfd525ec3d0a",
    "video_url": "/api/experiment/video/real_reel_17",
    "title": "Reel #17: DSA",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 83,
      "evidenceScores": {
        "visual": 96,
        "ocr": 81,
        "speech": 82,
        "semantic": 88
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (82%)",
      "ocr_keywords": [
        "On-Screen Code OCR (81%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (DSA intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:05",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 81%)",
          "confidence": 0.81
        },
        {
          "timestamp": "00:09",
          "description": "Synthesis & engineering takeaways (Speech Score: 82%)",
          "confidence": 0.82
        }
      ],
      "technical_depth": 0.89,
      "learning_value": 0.78,
      "entertainment_value": 0.54,
      "motivation_level": 0.61,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.23,
      "evidence_scores": {
        "visual": 96,
        "ocr": 81,
        "speech": 82,
        "semantic": 88
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 89%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 89%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 89%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:05",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 81%)",
        "confidence": 0.81
      },
      {
        "timestamp": "00:09",
        "description": "Synthesis & engineering takeaways (Speech Score: 82%)",
        "confidence": 0.82
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:05",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 81%)",
        "confidence": 0.81
      },
      {
        "timestamp": "00:09",
        "description": "Synthesis & engineering takeaways (Speech Score: 82%)",
        "confidence": 0.82
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 89,
    "technicalDepth": 89,
    "educational_value": 78,
    "educationalValue": 78,
    "educational_depth": 0.78,
    "entertainment_value": 54,
    "entertainmentValue": 54,
    "motivation_level": 61,
    "motivationLevel": 61,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 11.7,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 89%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_18",
    "index": 18,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.14 (2).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.53.14 (2).mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Motivational",
    "predicted_category": "Motivational",
    "labelStatus": "MATCH",
    "label_status": "MATCH",
    "groundTruthMatch": "PASS",
    "ground_truth_match": "PASS",
    "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Motivational.",
    "aiConfidence": 69,
    "evidenceScores": {
      "visual": 96,
      "ocr": 50,
      "speech": 88,
      "semantic": 80
    },
    "file_hash": "34dabad7ba4d8e92505074dea5f0be1d8de0356cc9471bf2d767de7f7aef5d51",
    "video_url": "/api/experiment/video/real_reel_18",
    "title": "Reel #18: Motivational",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Motivational",
      "category": "Motivational",
      "contentType": "Motivational",
      "content_type": "Motivational",
      "topics": [
        "Motivational",
        "Career Mindset",
        "Consistency",
        "Engineering Growth"
      ],
      "primary_tag": "Motivational",
      "secondary_tags": [
        "Career Mindset",
        "Consistency",
        "Engineering Growth"
      ],
      "labelStatus": "MATCH",
      "groundTruthMatch": "PASS",
      "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Motivational.",
      "aiConfidence": 69,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 88,
        "semantic": 80
      }
    },
    "interest_contribution": {
      "Career & Engineering Mindset": 0.9,
      "Software Engineering": 0.6
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (88%)",
      "ocr_keywords": [
        "On-Screen Code OCR (50%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:04",
          "description": "Visual context setup (Motivational intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:19",
          "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 50%)",
          "confidence": 0.5
        },
        {
          "timestamp": "00:32",
          "description": "Synthesis & engineering takeaways (Speech Score: 88%)",
          "confidence": 0.88
        }
      ],
      "technical_depth": 0.71,
      "learning_value": 0.64,
      "entertainment_value": 0.74,
      "motivation_level": 0.91,
      "hype_risk": 0.13,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.18,
      "evidence_scores": {
        "visual": 96,
        "ocr": 50,
        "speech": 88,
        "semantic": 80
      }
    },
    "generated_description": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 91%).",
    "summary": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 91%).",
    "video_summary": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 91%).",
    "detected_topics": [
      "Motivational",
      "Career Mindset",
      "Consistency",
      "Engineering Growth"
    ],
    "topics": [
      "Motivational",
      "Career Mindset",
      "Consistency",
      "Engineering Growth"
    ],
    "primaryCategory": "Motivational",
    "category": "Motivational",
    "contentType": "Motivational",
    "content_type": "Motivational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (Motivational intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:19",
        "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:32",
        "description": "Synthesis & engineering takeaways (Speech Score: 88%)",
        "confidence": 0.88
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (Motivational intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:19",
        "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:32",
        "description": "Synthesis & engineering takeaways (Speech Score: 88%)",
        "confidence": 0.88
      }
    ],
    "topic": "Motivational",
    "subtopic": "Career Mindset",
    "technical_depth": 71,
    "technicalDepth": 71,
    "educational_value": 64,
    "educationalValue": 64,
    "educational_depth": 0.64,
    "entertainment_value": 74,
    "entertainmentValue": 74,
    "motivation_level": 91,
    "motivationLevel": 91,
    "hype_score": 0.13,
    "hypeRisk": 13,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 38.5,
    "width": 474,
    "height": 848,
    "fps": 30.0,
    "description": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 91%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_19",
    "index": 19,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.15 (2).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.53.15 (2).mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 75,
    "evidenceScores": {
      "visual": 89,
      "ocr": 66,
      "speech": 82,
      "semantic": 81
    },
    "file_hash": "7cba25d151261ffab930ec408d89d9b3e9f6d2ad010d9159ef71d630c703d75c",
    "video_url": "/api/experiment/video/real_reel_19",
    "title": "Reel #19: DSA",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 75,
      "evidenceScores": {
        "visual": 89,
        "ocr": 66,
        "speech": 82,
        "semantic": 81
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (89%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (82%)",
      "ocr_keywords": [
        "On-Screen Code OCR (66%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:16",
          "description": "Visual context setup (DSA intro, Visual Score: 89%)",
          "confidence": 0.89
        },
        {
          "timestamp": "01:08",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 66%)",
          "confidence": 0.66
        },
        {
          "timestamp": "01:56",
          "description": "Synthesis & engineering takeaways (Speech Score: 82%)",
          "confidence": 0.82
        }
      ],
      "technical_depth": 0.9,
      "learning_value": 0.83,
      "entertainment_value": 0.41,
      "motivation_level": 0.61,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.32,
      "evidence_scores": {
        "visual": 89,
        "ocr": 66,
        "speech": 82,
        "semantic": 81
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:16",
        "description": "Visual context setup (DSA intro, Visual Score: 89%)",
        "confidence": 0.89
      },
      {
        "timestamp": "01:08",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 66%)",
        "confidence": 0.66
      },
      {
        "timestamp": "01:56",
        "description": "Synthesis & engineering takeaways (Speech Score: 82%)",
        "confidence": 0.82
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:16",
        "description": "Visual context setup (DSA intro, Visual Score: 89%)",
        "confidence": 0.89
      },
      {
        "timestamp": "01:08",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 66%)",
        "confidence": 0.66
      },
      {
        "timestamp": "01:56",
        "description": "Synthesis & engineering takeaways (Speech Score: 82%)",
        "confidence": 0.82
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 90,
    "technicalDepth": 90,
    "educational_value": 83,
    "educationalValue": 83,
    "educational_depth": 0.83,
    "entertainment_value": 41,
    "entertainmentValue": 41,
    "motivation_level": 61,
    "motivationLevel": 61,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 136.7,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 90%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_20",
    "index": 20,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.16 (1).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.53.16 (1).mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Motivational",
    "predicted_category": "Motivational",
    "labelStatus": "MATCH",
    "label_status": "MATCH",
    "groundTruthMatch": "PASS",
    "ground_truth_match": "PASS",
    "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Motivational.",
    "aiConfidence": 85,
    "evidenceScores": {
      "visual": 91,
      "ocr": 82,
      "speech": 88,
      "semantic": 89
    },
    "file_hash": "3e04b5f2591eafe18b876c43c64a163b81b4b2deea304a27ab7ccfe6281e9f90",
    "video_url": "/api/experiment/video/real_reel_20",
    "title": "Reel #20: Motivational",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Motivational",
      "category": "Motivational",
      "contentType": "Motivational",
      "content_type": "Motivational",
      "topics": [
        "Motivational",
        "Career Mindset",
        "Consistency",
        "Engineering Growth"
      ],
      "primary_tag": "Motivational",
      "secondary_tags": [
        "Career Mindset",
        "Consistency",
        "Engineering Growth"
      ],
      "labelStatus": "MATCH",
      "groundTruthMatch": "PASS",
      "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Motivational.",
      "aiConfidence": 85,
      "evidenceScores": {
        "visual": 91,
        "ocr": 82,
        "speech": 88,
        "semantic": 89
      }
    },
    "interest_contribution": {
      "Career & Engineering Mindset": 0.9,
      "Software Engineering": 0.6
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (91%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (88%)",
      "ocr_keywords": [
        "On-Screen Code OCR (82%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:06",
          "description": "Visual context setup (Motivational intro, Visual Score: 91%)",
          "confidence": 0.91
        },
        {
          "timestamp": "00:25",
          "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 82%)",
          "confidence": 0.82
        },
        {
          "timestamp": "00:44",
          "description": "Synthesis & engineering takeaways (Speech Score: 88%)",
          "confidence": 0.88
        }
      ],
      "technical_depth": 0.75,
      "learning_value": 0.81,
      "entertainment_value": 0.95,
      "motivation_level": 0.94,
      "hype_risk": 0.25,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.19,
      "evidence_scores": {
        "visual": 91,
        "ocr": 82,
        "speech": 88,
        "semantic": 89
      }
    },
    "generated_description": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 94%).",
    "summary": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 94%).",
    "video_summary": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 94%).",
    "detected_topics": [
      "Motivational",
      "Career Mindset",
      "Consistency",
      "Engineering Growth"
    ],
    "topics": [
      "Motivational",
      "Career Mindset",
      "Consistency",
      "Engineering Growth"
    ],
    "primaryCategory": "Motivational",
    "category": "Motivational",
    "contentType": "Motivational",
    "content_type": "Motivational",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:06",
        "description": "Visual context setup (Motivational intro, Visual Score: 91%)",
        "confidence": 0.91
      },
      {
        "timestamp": "00:25",
        "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 82%)",
        "confidence": 0.82
      },
      {
        "timestamp": "00:44",
        "description": "Synthesis & engineering takeaways (Speech Score: 88%)",
        "confidence": 0.88
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:06",
        "description": "Visual context setup (Motivational intro, Visual Score: 91%)",
        "confidence": 0.91
      },
      {
        "timestamp": "00:25",
        "description": "Core technical demonstration and explanation (Career Mindset, OCR Score: 82%)",
        "confidence": 0.82
      },
      {
        "timestamp": "00:44",
        "description": "Synthesis & engineering takeaways (Speech Score: 88%)",
        "confidence": 0.88
      }
    ],
    "topic": "Motivational",
    "subtopic": "Career Mindset",
    "technical_depth": 75,
    "technicalDepth": 75,
    "educational_value": 81,
    "educationalValue": 81,
    "educational_depth": 0.81,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 94,
    "motivationLevel": 94,
    "hype_score": 0.25,
    "hypeRisk": 25,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 51.9,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Inspirational tech career monologue emphasizing deliberate practice, engineering discipline, and mindset resilience (Motivation: 94%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_21",
    "index": 21,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.16.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.53.16.mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 69,
    "evidenceScores": {
      "visual": 96,
      "ocr": 50,
      "speech": 86,
      "semantic": 79
    },
    "file_hash": "cfb927b6f8793be01caa8f9c014ed05e0d042fb0767a3ee5be129f5f65c6445f",
    "video_url": "/api/experiment/video/real_reel_21",
    "title": "Reel #21: Entertainment",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 69,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 86,
        "semantic": 79
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (86%)",
      "ocr_keywords": [
        "On-Screen Code OCR (50%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:05",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:22",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
          "confidence": 0.5
        },
        {
          "timestamp": "00:38",
          "description": "Synthesis & engineering takeaways (Speech Score: 86%)",
          "confidence": 0.86
        }
      ],
      "technical_depth": 0.52,
      "learning_value": 0.58,
      "entertainment_value": 0.95,
      "motivation_level": 0.84,
      "hype_risk": 0.13,
      "difficulty": "Beginner",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.26,
      "evidence_scores": {
        "visual": 96,
        "ocr": 50,
        "speech": 86,
        "semantic": 79
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:05",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:22",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:38",
        "description": "Synthesis & engineering takeaways (Speech Score: 86%)",
        "confidence": 0.86
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:05",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:22",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "00:38",
        "description": "Synthesis & engineering takeaways (Speech Score: 86%)",
        "confidence": 0.86
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 52,
    "technicalDepth": 52,
    "educational_value": 58,
    "educationalValue": 58,
    "educational_depth": 0.58,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 84,
    "motivationLevel": 84,
    "hype_score": 0.13,
    "hypeRisk": 13,
    "difficulty": "Beginner",
    "career_relevance": 0.45,
    "duration": 44.8,
    "width": 474,
    "height": 848,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_22",
    "index": 22,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.17 (1).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/Motivational_reels/WhatsApp Video 2026-08-18 at 11.53.17 (1).mp4",
    "sourceFolder": "Motivational_reels",
    "source_folder": "Motivational_reels",
    "datasetLabel": "Motivational",
    "dataset_label": "Motivational",
    "expectedCategory": "Motivational",
    "expected_category": "Motivational",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 87,
    "evidenceScores": {
      "visual": 96,
      "ocr": 87,
      "speech": 84,
      "semantic": 91
    },
    "file_hash": "be1914e7d0dded85e5841653c84437cd62cd33b29d58f6f564587b4afb1ebacb",
    "video_url": "/api/experiment/video/real_reel_22",
    "title": "Reel #22: Entertainment",
    "content_identity": {
      "datasetLabel": "Motivational",
      "expectedCategory": "Motivational",
      "sourceFolder": "Motivational_reels",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 87,
      "evidenceScores": {
        "visual": 96,
        "ocr": 87,
        "speech": 84,
        "semantic": 91
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (84%)",
      "ocr_keywords": [
        "On-Screen Code OCR (87%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:04",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:18",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 87%)",
          "confidence": 0.87
        },
        {
          "timestamp": "00:31",
          "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
          "confidence": 0.84
        }
      ],
      "technical_depth": 0.76,
      "learning_value": 0.76,
      "entertainment_value": 0.95,
      "motivation_level": 0.7,
      "hype_risk": 0.13,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.14,
      "evidence_scores": {
        "visual": 96,
        "ocr": 87,
        "speech": 84,
        "semantic": 91
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:18",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 87%)",
        "confidence": 0.87
      },
      {
        "timestamp": "00:31",
        "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
        "confidence": 0.84
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:18",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 87%)",
        "confidence": 0.87
      },
      {
        "timestamp": "00:31",
        "description": "Synthesis & engineering takeaways (Speech Score: 84%)",
        "confidence": 0.84
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 76,
    "technicalDepth": 76,
    "educational_value": 76,
    "educationalValue": 76,
    "educational_depth": 0.76,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 70,
    "motivationLevel": 70,
    "hype_score": 0.13,
    "hypeRisk": 13,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 36.7,
    "width": 368,
    "height": 368,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#f59e0b"
  },
  {
    "id": "real_reel_23",
    "index": 23,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.13.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/programming_language/WhatsApp Video 2026-08-18 at 11.53.13.mp4",
    "sourceFolder": "programming_language",
    "source_folder": "programming_language",
    "datasetLabel": "Programming",
    "dataset_label": "Programming",
    "expectedCategory": "Programming",
    "expected_category": "Programming",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 68,
    "evidenceScores": {
      "visual": 96,
      "ocr": 50,
      "speech": 83,
      "semantic": 78
    },
    "file_hash": "812f5afd4f414b1d40ab362c842a70f7960962f187900ddeca65c2dd904b5dcc",
    "video_url": "/api/experiment/video/real_reel_23",
    "title": "Reel #23: Entertainment",
    "content_identity": {
      "datasetLabel": "Programming",
      "expectedCategory": "Programming",
      "sourceFolder": "programming_language",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 68,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 83,
        "semantic": 78
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (83%)",
      "ocr_keywords": [
        "On-Screen Code OCR (50%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:08",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:36",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
          "confidence": 0.5
        },
        {
          "timestamp": "01:02",
          "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
          "confidence": 0.83
        }
      ],
      "technical_depth": 0.46,
      "learning_value": 0.57,
      "entertainment_value": 0.95,
      "motivation_level": 0.68,
      "hype_risk": 0.18,
      "difficulty": "Beginner",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.31,
      "evidence_scores": {
        "visual": 96,
        "ocr": 50,
        "speech": 83,
        "semantic": 78
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:08",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:36",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "01:02",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:08",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:36",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 50%)",
        "confidence": 0.5
      },
      {
        "timestamp": "01:02",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 46,
    "technicalDepth": 46,
    "educational_value": 57,
    "educationalValue": 57,
    "educational_depth": 0.57,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 68,
    "motivationLevel": 68,
    "hype_score": 0.18,
    "hypeRisk": 18,
    "difficulty": "Beginner",
    "career_relevance": 0.45,
    "duration": 73.0,
    "width": 476,
    "height": 848,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#10b981"
  },
  {
    "id": "real_reel_24",
    "index": 24,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.14.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/programming_language/WhatsApp Video 2026-08-18 at 11.53.14.mp4",
    "sourceFolder": "programming_language",
    "source_folder": "programming_language",
    "datasetLabel": "Programming",
    "dataset_label": "Programming",
    "expectedCategory": "Programming",
    "expected_category": "Programming",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 82,
    "evidenceScores": {
      "visual": 96,
      "ocr": 81,
      "speech": 80,
      "semantic": 87
    },
    "file_hash": "93f2f633a0bae05fc2ff2daae0952aa27ede3174c477970c8e523d40b1639214",
    "video_url": "/api/experiment/video/real_reel_24",
    "title": "Reel #24: DSA",
    "content_identity": {
      "datasetLabel": "Programming",
      "expectedCategory": "Programming",
      "sourceFolder": "programming_language",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 82,
      "evidenceScores": {
        "visual": 96,
        "ocr": 81,
        "speech": 80,
        "semantic": 87
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (80%)",
      "ocr_keywords": [
        "On-Screen Code OCR (81%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (DSA intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:07",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 81%)",
          "confidence": 0.81
        },
        {
          "timestamp": "00:12",
          "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
          "confidence": 0.8
        }
      ],
      "technical_depth": 0.93,
      "learning_value": 0.81,
      "entertainment_value": 0.39,
      "motivation_level": 0.5,
      "hype_risk": 0.02,
      "difficulty": "Advanced",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.16,
      "evidence_scores": {
        "visual": 96,
        "ocr": 81,
        "speech": 80,
        "semantic": 87
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 93%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 93%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 93%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "HIGH",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 81%)",
        "confidence": 0.81
      },
      {
        "timestamp": "00:12",
        "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
        "confidence": 0.8
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 81%)",
        "confidence": 0.81
      },
      {
        "timestamp": "00:12",
        "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
        "confidence": 0.8
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 93,
    "technicalDepth": 93,
    "educational_value": 81,
    "educationalValue": 81,
    "educational_depth": 0.81,
    "entertainment_value": 39,
    "entertainmentValue": 39,
    "motivation_level": 50,
    "motivationLevel": 50,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Advanced",
    "career_relevance": 0.88,
    "duration": 14.2,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 93%).",
    "thumbnail_color": "#10b981"
  },
  {
    "id": "real_reel_25",
    "index": 25,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.15 (1).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/programming_language/WhatsApp Video 2026-08-18 at 11.53.15 (1).mp4",
    "sourceFolder": "programming_language",
    "source_folder": "programming_language",
    "datasetLabel": "Programming",
    "dataset_label": "Programming",
    "expectedCategory": "Programming",
    "expected_category": "Programming",
    "predictedCategory": "Programming",
    "predicted_category": "Programming",
    "labelStatus": "MATCH",
    "label_status": "MATCH",
    "groundTruthMatch": "PASS",
    "ground_truth_match": "PASS",
    "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Programming.",
    "aiConfidence": 72,
    "evidenceScores": {
      "visual": 88,
      "ocr": 62,
      "speech": 80,
      "semantic": 78
    },
    "file_hash": "8918a397120044b16f866b15b0555448623a6eb29ced303d58ff5c428bb71c61",
    "video_url": "/api/experiment/video/real_reel_25",
    "title": "Reel #25: Programming",
    "content_identity": {
      "datasetLabel": "Programming",
      "expectedCategory": "Programming",
      "sourceFolder": "programming_language",
      "predictedCategory": "Programming",
      "category": "Programming",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "Programming",
        "Software Engineering",
        "Tech Tutorial"
      ],
      "primary_tag": "Programming",
      "secondary_tags": [
        "Software Engineering",
        "Tech Tutorial"
      ],
      "labelStatus": "MATCH",
      "groundTruthMatch": "PASS",
      "consistencyExplanation": "Dataset label and AI multimodal analysis both agree on Programming.",
      "aiConfidence": 72,
      "evidenceScores": {
        "visual": 88,
        "ocr": 62,
        "speech": 80,
        "semantic": 78
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "Programming": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (88%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (80%)",
      "ocr_keywords": [
        "On-Screen Code OCR (62%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:06",
          "description": "Visual context setup (Programming intro, Visual Score: 88%)",
          "confidence": 0.88
        },
        {
          "timestamp": "00:28",
          "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 62%)",
          "confidence": 0.62
        },
        {
          "timestamp": "00:48",
          "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
          "confidence": 0.8
        }
      ],
      "technical_depth": 0.87,
      "learning_value": 0.85,
      "entertainment_value": 0.32,
      "motivation_level": 0.53,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.18,
      "evidence_scores": {
        "visual": 88,
        "ocr": 62,
        "speech": 80,
        "semantic": 78
      }
    },
    "generated_description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 87%).",
    "summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 87%).",
    "video_summary": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 87%).",
    "detected_topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "topics": [
      "Programming",
      "Software Engineering",
      "Tech Tutorial"
    ],
    "primaryCategory": "Programming",
    "category": "Programming",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:06",
        "description": "Visual context setup (Programming intro, Visual Score: 88%)",
        "confidence": 0.88
      },
      {
        "timestamp": "00:28",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 62%)",
        "confidence": 0.62
      },
      {
        "timestamp": "00:48",
        "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
        "confidence": 0.8
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:06",
        "description": "Visual context setup (Programming intro, Visual Score: 88%)",
        "confidence": 0.88
      },
      {
        "timestamp": "00:28",
        "description": "Core technical demonstration and explanation (Software Engineering, OCR Score: 62%)",
        "confidence": 0.62
      },
      {
        "timestamp": "00:48",
        "description": "Synthesis & engineering takeaways (Speech Score: 80%)",
        "confidence": 0.8
      }
    ],
    "topic": "Programming",
    "subtopic": "Software Engineering",
    "technical_depth": 87,
    "technicalDepth": 87,
    "educational_value": 85,
    "educationalValue": 85,
    "educational_depth": 0.85,
    "entertainment_value": 32,
    "entertainmentValue": 32,
    "motivation_level": 53,
    "motivationLevel": 53,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.88,
    "duration": 57.5,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "Software development walkthrough demonstrating engineering workflows and syntax patterns (Tech Depth: 87%).",
    "thumbnail_color": "#10b981"
  },
  {
    "id": "real_reel_26",
    "index": 26,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.16 (2).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/programming_language/WhatsApp Video 2026-08-18 at 11.53.16 (2).mp4",
    "sourceFolder": "programming_language",
    "source_folder": "programming_language",
    "datasetLabel": "Programming",
    "dataset_label": "Programming",
    "expectedCategory": "Programming",
    "expected_category": "Programming",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 78,
    "evidenceScores": {
      "visual": 96,
      "ocr": 73,
      "speech": 78,
      "semantic": 84
    },
    "file_hash": "6eaa13aa9d7e3148bfe477d337764d7c2b89ed943bfbe5bb67b40dd92cf5554d",
    "video_url": "/api/experiment/video/real_reel_26",
    "title": "Reel #26: Entertainment",
    "content_identity": {
      "datasetLabel": "Programming",
      "expectedCategory": "Programming",
      "sourceFolder": "programming_language",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 78,
      "evidenceScores": {
        "visual": 96,
        "ocr": 73,
        "speech": 78,
        "semantic": 84
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (78%)",
      "ocr_keywords": [
        "On-Screen Code OCR (73%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:01",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:07",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 73%)",
          "confidence": 0.73
        },
        {
          "timestamp": "00:13",
          "description": "Synthesis & engineering takeaways (Speech Score: 78%)",
          "confidence": 0.78
        }
      ],
      "technical_depth": 0.61,
      "learning_value": 0.87,
      "entertainment_value": 0.95,
      "motivation_level": 0.41,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.16,
      "evidence_scores": {
        "visual": 96,
        "ocr": 73,
        "speech": 78,
        "semantic": 84
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 73%)",
        "confidence": 0.73
      },
      {
        "timestamp": "00:13",
        "description": "Synthesis & engineering takeaways (Speech Score: 78%)",
        "confidence": 0.78
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:01",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:07",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 73%)",
        "confidence": 0.73
      },
      {
        "timestamp": "00:13",
        "description": "Synthesis & engineering takeaways (Speech Score: 78%)",
        "confidence": 0.78
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 61,
    "technicalDepth": 61,
    "educational_value": 87,
    "educationalValue": 87,
    "educational_depth": 0.87,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 41,
    "motivationLevel": 41,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.45,
    "duration": 15.5,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#10b981"
  },
  {
    "id": "real_reel_27",
    "index": 27,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.17 (3).mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/programming_language/WhatsApp Video 2026-08-18 at 11.53.17 (3).mp4",
    "sourceFolder": "programming_language",
    "source_folder": "programming_language",
    "datasetLabel": "Programming",
    "dataset_label": "Programming",
    "expectedCategory": "Programming",
    "expected_category": "Programming",
    "predictedCategory": "Entertainment",
    "predicted_category": "Entertainment",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content.",
    "aiConfidence": 72,
    "evidenceScores": {
      "visual": 96,
      "ocr": 58,
      "speech": 83,
      "semantic": 81
    },
    "file_hash": "1a49efc6a84fb5f159e5c0730144891dc24c1d87e73b80a1889bdfc52bb66387",
    "video_url": "/api/experiment/video/real_reel_27",
    "title": "Reel #27: Entertainment",
    "content_identity": {
      "datasetLabel": "Programming",
      "expectedCategory": "Programming",
      "sourceFolder": "programming_language",
      "predictedCategory": "Entertainment",
      "category": "Entertainment",
      "contentType": "Comedy",
      "content_type": "Comedy",
      "topics": [
        "Entertainment",
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "primary_tag": "Entertainment",
      "secondary_tags": [
        "Developer Culture",
        "Comedy",
        "Tech Humor"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content.",
      "aiConfidence": 72,
      "evidenceScores": {
        "visual": 96,
        "ocr": 58,
        "speech": 83,
        "semantic": 81
      }
    },
    "interest_contribution": {
      "Technology Entertainment": 0.9,
      "Developer Culture": 0.75
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (83%)",
      "ocr_keywords": [
        "On-Screen Code OCR (58%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:05",
          "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:21",
          "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 58%)",
          "confidence": 0.58
        },
        {
          "timestamp": "00:36",
          "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
          "confidence": 0.83
        }
      ],
      "technical_depth": 0.55,
      "learning_value": 0.7,
      "entertainment_value": 0.95,
      "motivation_level": 0.67,
      "hype_risk": 0.13,
      "difficulty": "Beginner",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.23,
      "evidence_scores": {
        "visual": 96,
        "ocr": 58,
        "speech": 83,
        "semantic": 81
      }
    },
    "generated_description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "video_summary": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "detected_topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "topics": [
      "Entertainment",
      "Developer Culture",
      "Comedy",
      "Tech Humor"
    ],
    "primaryCategory": "Entertainment",
    "category": "Entertainment",
    "contentType": "Comedy",
    "content_type": "Comedy",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:05",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:21",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 58%)",
        "confidence": 0.58
      },
      {
        "timestamp": "00:36",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:05",
        "description": "Visual context setup (Entertainment intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:21",
        "description": "Core technical demonstration and explanation (Developer Culture, OCR Score: 58%)",
        "confidence": 0.58
      },
      {
        "timestamp": "00:36",
        "description": "Synthesis & engineering takeaways (Speech Score: 83%)",
        "confidence": 0.83
      }
    ],
    "topic": "Entertainment",
    "subtopic": "Developer Culture",
    "technical_depth": 55,
    "technicalDepth": 55,
    "educational_value": 70,
    "educationalValue": 70,
    "educational_depth": 0.7,
    "entertainment_value": 95,
    "entertainmentValue": 95,
    "motivation_level": 67,
    "motivationLevel": 67,
    "hype_score": 0.13,
    "hypeRisk": 13,
    "difficulty": "Beginner",
    "career_relevance": 0.45,
    "duration": 42.7,
    "width": 478,
    "height": 850,
    "fps": 30.0,
    "description": "High-energy developer comedy and tech culture sketch with dynamic motion transitions and humorous narrative (Entertainment: 95%).",
    "thumbnail_color": "#10b981"
  },
  {
    "id": "real_reel_28",
    "index": 28,
    "filename": "WhatsApp Video 2026-08-18 at 11.53.18.mp4",
    "filepath": "/Users/narasimhajampana/Movies/AntiGravity_deployed/Hackthon/Reels/programming_language/WhatsApp Video 2026-08-18 at 11.53.18.mp4",
    "sourceFolder": "programming_language",
    "source_folder": "programming_language",
    "datasetLabel": "Programming",
    "dataset_label": "Programming",
    "expectedCategory": "Programming",
    "expected_category": "Programming",
    "predictedCategory": "DSA",
    "predicted_category": "DSA",
    "labelStatus": "CONFLICT",
    "label_status": "CONFLICT",
    "groundTruthMatch": "REVIEW",
    "ground_truth_match": "REVIEW",
    "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected DSA (Educational) content.",
    "aiConfidence": 73,
    "evidenceScores": {
      "visual": 96,
      "ocr": 65,
      "speech": 76,
      "semantic": 81
    },
    "file_hash": "666cc5b67ae55964512917285363e8e00558e193f38d9a18a64f7eae8c7af515",
    "video_url": "/api/experiment/video/real_reel_28",
    "title": "Reel #28: DSA",
    "content_identity": {
      "datasetLabel": "Programming",
      "expectedCategory": "Programming",
      "sourceFolder": "programming_language",
      "predictedCategory": "DSA",
      "category": "DSA",
      "contentType": "Educational",
      "content_type": "Educational",
      "topics": [
        "DSA",
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "primary_tag": "DSA",
      "secondary_tags": [
        "Algorithms",
        "Sliding Window",
        "Data Structures"
      ],
      "labelStatus": "CONFLICT",
      "groundTruthMatch": "REVIEW",
      "consistencyExplanation": "Dataset label says Programming, but multimodal analysis detected DSA (Educational) content.",
      "aiConfidence": 73,
      "evidenceScores": {
        "visual": 96,
        "ocr": 65,
        "speech": 76,
        "semantic": 81
      }
    },
    "interest_contribution": {
      "Software Engineering": 0.85,
      "DSA": 0.9
    },
    "multimodal_evidence": {
      "visual_detected": [
        "Visual Frame Dynamics (96%)"
      ],
      "audio_transcript": "Acoustic Speech Energy (76%)",
      "ocr_keywords": [
        "On-Screen Code OCR (65%)"
      ],
      "key_moments": [
        {
          "timestamp": "00:04",
          "description": "Visual context setup (DSA intro, Visual Score: 96%)",
          "confidence": 0.96
        },
        {
          "timestamp": "00:19",
          "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 65%)",
          "confidence": 0.65
        },
        {
          "timestamp": "00:33",
          "description": "Synthesis & engineering takeaways (Speech Score: 76%)",
          "confidence": 0.76
        }
      ],
      "technical_depth": 0.87,
      "learning_value": 0.95,
      "entertainment_value": 0.71,
      "motivation_level": 0.31,
      "hype_risk": 0.02,
      "difficulty": "Intermediate",
      "model_used": "TechLens Multimodal CV-Audio Engine",
      "fallback_model": "OpenCV Temporal Frame Extractor",
      "processing_time_seconds": 0.43,
      "evidence_scores": {
        "visual": 96,
        "ocr": 65,
        "speech": 76,
        "semantic": 81
      }
    },
    "generated_description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "video_summary": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "detected_topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "topics": [
      "DSA",
      "Algorithms",
      "Sliding Window",
      "Data Structures"
    ],
    "primaryCategory": "DSA",
    "category": "DSA",
    "contentType": "Educational",
    "content_type": "Educational",
    "content_confidence": "MEDIUM",
    "key_moments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:19",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 65%)",
        "confidence": 0.65
      },
      {
        "timestamp": "00:33",
        "description": "Synthesis & engineering takeaways (Speech Score: 76%)",
        "confidence": 0.76
      }
    ],
    "keyMoments": [
      {
        "timestamp": "00:04",
        "description": "Visual context setup (DSA intro, Visual Score: 96%)",
        "confidence": 0.96
      },
      {
        "timestamp": "00:19",
        "description": "Core technical demonstration and explanation (Algorithms, OCR Score: 65%)",
        "confidence": 0.65
      },
      {
        "timestamp": "00:33",
        "description": "Synthesis & engineering takeaways (Speech Score: 76%)",
        "confidence": 0.76
      }
    ],
    "topic": "DSA",
    "subtopic": "Algorithms",
    "technical_depth": 87,
    "technicalDepth": 87,
    "educational_value": 95,
    "educationalValue": 95,
    "educational_depth": 0.95,
    "entertainment_value": 71,
    "entertainmentValue": 71,
    "motivation_level": 31,
    "motivationLevel": 31,
    "hype_score": 0.02,
    "hypeRisk": 2,
    "difficulty": "Intermediate",
    "career_relevance": 0.88,
    "duration": 39.3,
    "width": 1080,
    "height": 1920,
    "fps": 30.0,
    "description": "Algorithmic problem-solving tutorial analyzing data structure invariants, pointer bounds, and runtime complexity (Tech Depth: 87%).",
    "thumbnail_color": "#10b981"
  }
];

export const STATIC_EVALUATION_METRICS: ClassificationEvaluation = {
  "total_evaluated": 28,
  "matches_count": 5,
  "conflicts_count": 23,
  "agreement_rate": 17.9,
  "macro_f1": 0.18,
  "average_confidence": 76.7,
  "categories": [
    "DSA",
    "Programming",
    "Entertainment",
    "Motivational",
    "AI / ML",
    "Hardware",
    "System Design"
  ],
  "per_category": {
    "DSA": {
      "samples": 4,
      "precision": 0.11,
      "recall": 0.25,
      "f1_score": 0.15
    },
    "Programming": {
      "samples": 6,
      "precision": 0.25,
      "recall": 0.17,
      "f1_score": 0.2
    },
    "Entertainment": {
      "samples": 5,
      "precision": 0.08,
      "recall": 0.2,
      "f1_score": 0.11
    },
    "Motivational": {
      "samples": 13,
      "precision": 0.67,
      "recall": 0.15,
      "f1_score": 0.25
    },
    "AI / ML": {
      "samples": 0,
      "precision": 0.0,
      "recall": 0.0,
      "f1_score": 0.0
    },
    "Hardware": {
      "samples": 0,
      "precision": 0.0,
      "recall": 0.0,
      "f1_score": 0.0
    },
    "System Design": {
      "samples": 0,
      "precision": 0.0,
      "recall": 0.0,
      "f1_score": 0.0
    }
  },
  "confusion_matrix": {
    "DSA": {
      "DSA": 1,
      "Programming": 1,
      "Entertainment": 2,
      "Motivational": 0,
      "AI / ML": 0,
      "Hardware": 0,
      "System Design": 0
    },
    "Programming": {
      "DSA": 2,
      "Programming": 1,
      "Entertainment": 3,
      "Motivational": 0,
      "AI / ML": 0,
      "Hardware": 0,
      "System Design": 0
    },
    "Entertainment": {
      "DSA": 2,
      "Programming": 1,
      "Entertainment": 1,
      "Motivational": 1,
      "AI / ML": 0,
      "Hardware": 0,
      "System Design": 0
    },
    "Motivational": {
      "DSA": 4,
      "Programming": 1,
      "Entertainment": 6,
      "Motivational": 2,
      "AI / ML": 0,
      "Hardware": 0,
      "System Design": 0
    },
    "AI / ML": {
      "DSA": 0,
      "Programming": 0,
      "Entertainment": 0,
      "Motivational": 0,
      "AI / ML": 0,
      "Hardware": 0,
      "System Design": 0
    },
    "Hardware": {
      "DSA": 0,
      "Programming": 0,
      "Entertainment": 0,
      "Motivational": 0,
      "AI / ML": 0,
      "Hardware": 0,
      "System Design": 0
    },
    "System Design": {
      "DSA": 0,
      "Programming": 0,
      "Entertainment": 0,
      "Motivational": 0,
      "AI / ML": 0,
      "Hardware": 0,
      "System Design": 0
    }
  },
  "sample_records": [
    {
      "id": "real_reel_01",
      "filename": "WhatsApp Video 2026-08-18 at 11.29.01 (2).mp4",
      "sourceFolder": "DSA_reels",
      "datasetLabel": "DSA",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 90,
      "evidenceScores": {
        "visual": 96,
        "ocr": 95,
        "speech": 85,
        "semantic": 94
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says DSA, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_02",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.15.mp4",
      "sourceFolder": "DSA_reels",
      "datasetLabel": "DSA",
      "predictedCategory": "Programming",
      "contentType": "Educational",
      "aiConfidence": 66,
      "evidenceScores": {
        "visual": 88,
        "ocr": 51,
        "speech": 79,
        "semantic": 74
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says DSA, but multimodal analysis detected Programming (Educational) content."
    },
    {
      "id": "real_reel_03",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.17 (2).mp4",
      "sourceFolder": "DSA_reels",
      "datasetLabel": "DSA",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 65,
      "evidenceScores": {
        "visual": 82,
        "ocr": 50,
        "speech": 85,
        "semantic": 74
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says DSA, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_04",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.17.mp4",
      "sourceFolder": "DSA_reels",
      "datasetLabel": "DSA",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 87,
      "evidenceScores": {
        "visual": 90,
        "ocr": 95,
        "speech": 83,
        "semantic": 91
      },
      "labelStatus": "MATCH",
      "explanation": "Dataset label and AI multimodal analysis both agree on DSA."
    },
    {
      "id": "real_reel_05",
      "filename": "WhatsApp Video 2026-08-18 at 11.28.06.mp4",
      "sourceFolder": "Funny_reels",
      "datasetLabel": "Entertainment",
      "predictedCategory": "Programming",
      "contentType": "Educational",
      "aiConfidence": 73,
      "evidenceScores": {
        "visual": 95,
        "ocr": 59,
        "speech": 83,
        "semantic": 81
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Entertainment, but multimodal analysis detected Programming (Educational) content."
    },
    {
      "id": "real_reel_06",
      "filename": "WhatsApp Video 2026-08-18 at 11.28.13.mp4",
      "sourceFolder": "Funny_reels",
      "datasetLabel": "Entertainment",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 80,
      "evidenceScores": {
        "visual": 89,
        "ocr": 77,
        "speech": 81,
        "semantic": 84
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Entertainment, but multimodal analysis detected DSA (Educational) content."
    },
    {
      "id": "real_reel_07",
      "filename": "WhatsApp Video 2026-08-18 at 11.28.46 (1).mp4",
      "sourceFolder": "Funny_reels",
      "datasetLabel": "Entertainment",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 83,
      "evidenceScores": {
        "visual": 82,
        "ocr": 93,
        "speech": 81,
        "semantic": 87
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Entertainment, but multimodal analysis detected DSA (Educational) content."
    },
    {
      "id": "real_reel_08",
      "filename": "WhatsApp Video 2026-08-18 at 11.28.46 (2).mp4",
      "sourceFolder": "Funny_reels",
      "datasetLabel": "Entertainment",
      "predictedCategory": "Motivational",
      "contentType": "Motivational",
      "aiConfidence": 74,
      "evidenceScores": {
        "visual": 96,
        "ocr": 61,
        "speech": 84,
        "semantic": 82
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Entertainment, but multimodal analysis detected Motivational (Motivational) content."
    },
    {
      "id": "real_reel_09",
      "filename": "WhatsApp Video 2026-08-18 at 11.29.01.mp4",
      "sourceFolder": "Funny_reels",
      "datasetLabel": "Entertainment",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 86,
      "evidenceScores": {
        "visual": 96,
        "ocr": 83,
        "speech": 86,
        "semantic": 90
      },
      "labelStatus": "MATCH",
      "explanation": "Dataset label and AI multimodal analysis both agree on Entertainment."
    },
    {
      "id": "real_reel_10",
      "filename": "WhatsApp Video 2026-08-18 at 11.28.03.mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Programming",
      "contentType": "Educational",
      "aiConfidence": 71,
      "evidenceScores": {
        "visual": 83,
        "ocr": 64,
        "speech": 75,
        "semantic": 76
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected Programming (Educational) content."
    },
    {
      "id": "real_reel_11",
      "filename": "WhatsApp Video 2026-08-18 at 11.28.46.mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 82,
      "evidenceScores": {
        "visual": 95,
        "ocr": 80,
        "speech": 80,
        "semantic": 87
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content."
    },
    {
      "id": "real_reel_12",
      "filename": "WhatsApp Video 2026-08-18 at 11.29.01 (1).mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 75,
      "evidenceScores": {
        "visual": 96,
        "ocr": 67,
        "speech": 79,
        "semantic": 82
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_13",
      "filename": "WhatsApp Video 2026-08-18 at 11.29.02 (1).mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 78,
      "evidenceScores": {
        "visual": 96,
        "ocr": 70,
        "speech": 81,
        "semantic": 84
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content."
    },
    {
      "id": "real_reel_14",
      "filename": "WhatsApp Video 2026-08-18 at 11.29.02.mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 88,
      "evidenceScores": {
        "visual": 96,
        "ocr": 91,
        "speech": 84,
        "semantic": 92
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_15",
      "filename": "WhatsApp Video 2026-08-18 at 11.50.49.mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 66,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 77,
        "semantic": 76
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_16",
      "filename": "WhatsApp Video 2026-08-18 at 11.50.58.mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 70,
      "evidenceScores": {
        "visual": 96,
        "ocr": 58,
        "speech": 77,
        "semantic": 79
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_17",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.14 (1).mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 83,
      "evidenceScores": {
        "visual": 96,
        "ocr": 81,
        "speech": 82,
        "semantic": 88
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content."
    },
    {
      "id": "real_reel_18",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.14 (2).mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Motivational",
      "contentType": "Motivational",
      "aiConfidence": 69,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 88,
        "semantic": 80
      },
      "labelStatus": "MATCH",
      "explanation": "Dataset label and AI multimodal analysis both agree on Motivational."
    },
    {
      "id": "real_reel_19",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.15 (2).mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 75,
      "evidenceScores": {
        "visual": 89,
        "ocr": 66,
        "speech": 82,
        "semantic": 81
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected DSA (Educational) content."
    },
    {
      "id": "real_reel_20",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.16 (1).mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Motivational",
      "contentType": "Motivational",
      "aiConfidence": 85,
      "evidenceScores": {
        "visual": 91,
        "ocr": 82,
        "speech": 88,
        "semantic": 89
      },
      "labelStatus": "MATCH",
      "explanation": "Dataset label and AI multimodal analysis both agree on Motivational."
    },
    {
      "id": "real_reel_21",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.16.mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 69,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 86,
        "semantic": 79
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_22",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.17 (1).mp4",
      "sourceFolder": "Motivational_reels",
      "datasetLabel": "Motivational",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 87,
      "evidenceScores": {
        "visual": 96,
        "ocr": 87,
        "speech": 84,
        "semantic": 91
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Motivational, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_23",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.13.mp4",
      "sourceFolder": "programming_language",
      "datasetLabel": "Programming",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 68,
      "evidenceScores": {
        "visual": 96,
        "ocr": 50,
        "speech": 83,
        "semantic": 78
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_24",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.14.mp4",
      "sourceFolder": "programming_language",
      "datasetLabel": "Programming",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 82,
      "evidenceScores": {
        "visual": 96,
        "ocr": 81,
        "speech": 80,
        "semantic": 87
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Programming, but multimodal analysis detected DSA (Educational) content."
    },
    {
      "id": "real_reel_25",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.15 (1).mp4",
      "sourceFolder": "programming_language",
      "datasetLabel": "Programming",
      "predictedCategory": "Programming",
      "contentType": "Educational",
      "aiConfidence": 72,
      "evidenceScores": {
        "visual": 88,
        "ocr": 62,
        "speech": 80,
        "semantic": 78
      },
      "labelStatus": "MATCH",
      "explanation": "Dataset label and AI multimodal analysis both agree on Programming."
    },
    {
      "id": "real_reel_26",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.16 (2).mp4",
      "sourceFolder": "programming_language",
      "datasetLabel": "Programming",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 78,
      "evidenceScores": {
        "visual": 96,
        "ocr": 73,
        "speech": 78,
        "semantic": 84
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_27",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.17 (3).mp4",
      "sourceFolder": "programming_language",
      "datasetLabel": "Programming",
      "predictedCategory": "Entertainment",
      "contentType": "Comedy",
      "aiConfidence": 72,
      "evidenceScores": {
        "visual": 96,
        "ocr": 58,
        "speech": 83,
        "semantic": 81
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Programming, but multimodal analysis detected Entertainment (Comedy) content."
    },
    {
      "id": "real_reel_28",
      "filename": "WhatsApp Video 2026-08-18 at 11.53.18.mp4",
      "sourceFolder": "programming_language",
      "datasetLabel": "Programming",
      "predictedCategory": "DSA",
      "contentType": "Educational",
      "aiConfidence": 73,
      "evidenceScores": {
        "visual": 96,
        "ocr": 65,
        "speech": 76,
        "semantic": 81
      },
      "labelStatus": "CONFLICT",
      "explanation": "Dataset label says Programming, but multimodal analysis detected DSA (Educational) content."
    }
  ]
};
