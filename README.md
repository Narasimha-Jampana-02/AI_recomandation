# TechLens AI 🔬

> **"Don't recommend what they watched. Understand what they are becoming."**

TechLens AI is a cross-content pattern analysis engine that infers a student's deeper technology interest from their short-form video interaction history — going far beyond single-keyword topic matching.

---

## 🚀 Quick Start

### Option 1: Frontend Only (no backend needed)
The frontend includes a full client-side analysis engine and works standalone.

```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:5173

### Option 2: Full Stack (with Python backend)

**Terminal 1 — Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # optionally add GEMINI_API_KEY
uvicorn main:app --reload --port 8000
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Open: http://localhost:5173

---

## 🧠 How It Works

```
Reel History (8 reels)
    ↓
STEP 1: Content Understanding
  - Topic extraction, hype detection, educational depth
    ↓
STEP 2: Behavior Analysis
  - Weighted signals: replay(30%) > save(25%) > share(20%) > like(15%) > watch%(10%)
  - Skip = strong negative (70% penalty)
    ↓
STEP 3: Cross-Reel Analysis
  - Semantic topic clustering across all reels
  - Relationship mapping between clusters
    ↓
STEP 4: Pattern Discovery
  - Interest vector generation (0.0 – 1.0 per topic cluster)
  - Engagement-weighted score aggregation
    ↓
STEP 5: Interest Inference
  - Primary interest + confidence score
  - Secondary interests with scores
    ↓
STEP 6: Recommendation Selection
  - Match interest to curated content catalog
  - Quality × educational depth scoring
    ↓
STEP 7: Hype Filter
  - Reject low-value clickbait (hype_score > 0.7)
  - Select better alternative
    ↓
STEP 8: Explainable Output
  - Human-readable reasoning chain
  - Evidence mapping (reel → cluster)
```

---

## 📊 Sample Dataset

8 fictional reels demonstrating cross-topic interest convergence:

| Reel | Category | Watch | Key Behavior |
|------|----------|-------|--------------|
| Java When Code Works First Try | Programming | 95% | Liked, Replayed |
| Day in Life of Software Engineer | Career | 100% | Liked, Saved, Replayed |
| That Coding Interview Question | DSA | 92% | Liked, Saved |
| MacBook vs Windows for Devs | Hardware | 88% | Saved |
| GitHub Tricks Every Dev Should Know | Dev Tools | 100% | Liked, Saved, **Shared** |
| 10 AI Tools That Will Get You a Job | Hype/AI | 20% | **Skipped** ❌ |
| System Design in 60 Seconds | System Design | 94% | Liked, Replayed |
| Gaming Setup Performance Test | Gaming | 55% | — |

**Inferred Interest:** Software Engineering (91% confidence)  
**Recommendation:** "How Software Engineers Think About System Design"

---

## 🏗️ Architecture

```
frontend/                   React + Vite + TypeScript
  src/
    components/
      LandingPage.tsx        Hero, comparison, architecture visualization
      Dashboard.tsx          8 reel cards with interaction badges
      AnalysisFlow.tsx       Animated 8-step pipeline
      ResultsScreen.tsx      Interest DNA + Radar + Reasoning + Recommendation
      InterestGraph.tsx      SVG force-graph visualization
    services/
      api.ts                 Backend API client (with fallback)
      analysisEngine.ts      Full client-side analysis engine
    store/
      useStore.ts            Zustand global state
    data/
      reels.ts               8 sample reels
    types/
      index.ts               TypeScript interfaces

backend/                    Python + FastAPI
  main.py                   API endpoints
  services/
    analysis.py             Full analysis pipeline (mirrors frontend)
  data/
    reels.json              Sample dataset
```

---

## 🎯 Judge Demo Flow (2-3 minutes)

1. **Click "Judge Demo"** — loads sample scenario automatically
2. **View 8 Reels** — note the diverse categories including one skipped hype reel
3. **Click "Analyze"** — watch the 8-step pipeline animate
4. **Interest DNA** — see Software Engineering emerge with 91% confidence
5. **Radar Chart** — see interest vector distribution
6. **Hype Filter** — see "10 AI Tools..." explicitly rejected with reason
7. **Final Recommendation** — System Design content with 92% match score
8. **Reasoning** — explainable AI evidence chain

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite + TypeScript |
| Styling | Tailwind CSS v3 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Charts | Recharts (RadarChart) |
| State | Zustand |
| Visualization | Custom SVG graph |
| Backend | Python 3.11 + FastAPI |
| AI (optional) | Google Gemini 1.5 Flash |

---

## 🔒 Security

- API keys stored in `.env` (never in frontend code)
- Frontend → Backend → AI API (not Frontend → AI API)
- CORS configured for development and production

---

## 📦 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the dist/ folder
```

### Backend (Railway/Render/Fly.io)
```bash
# Set GEMINI_API_KEY environment variable
# Start command: uvicorn main:app --host 0.0.0.0 --port $PORT
```

---

## 💡 Technical Innovation

**The key innovation is the cross-reel semantic clustering approach:**

1. Each reel's topics are mapped to abstract interest clusters (not just keywords)
2. Engagement signals are weighted differently: replay > save > like > watch% > skip
3. Skip signals apply a 70% penalty — hype content is actively punished
4. Cross-reel pattern discovery aggregates cluster scores with engagement weighting
5. Interest inference uses separation between top-2 scores for confidence
6. Recommendation quality = match_score × (1 - hype_score) × educational_depth

This architecture is **generalizable** — new reels and topics require only updating the cluster map, not rebuilding the engine.

---

*Built for hackathon demonstration. Fictional data only. No real user data collected.*
