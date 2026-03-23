"""
main.py — LGA Map API
Serves pre-generated SVG path data for all Nigerian states.
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path

app = FastAPI(
    title="Nigeria LGA Map API",
    description="SVG path data for all Nigerian LGAs, projected and ready to render.",
    version="1.0.0",
)

ALLOWED_ORIGINS = [
    "https://clarion.tasguard.com",
    "https://clarioncall.tasguard.com",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "OPTIONS"],
    allow_headers=["*"],
)

DATA_FILE = Path("data/nigeria-lgas.json")


@app.on_event("startup")
def load_data():
    global DATA
    if not DATA_FILE.exists():
        raise RuntimeError(
            "data/nigeria-lgas.json not found. Run generate.py first."
        )
    DATA = json.loads(DATA_FILE.read_text(encoding="utf-8"))
    print(
        f"✅ Loaded {DATA['total_states']} states, {DATA['total_lgas']} LGAs"
    )


@app.get("/")
def root():
    return {
        "service": "Nigeria LGA Map API",
        "states": DATA["total_states"],
        "lgas": DATA["total_lgas"],
        "endpoints": ["/states", "/lgas/{state}", "/lgas/{state}/with-ratings"],
    }


@app.get("/health")
def health():
    return {"status": "ok", "states": DATA["total_states"]}


@app.get("/states")
def list_states():
    """List all available state slugs."""
    return {"states": sorted(DATA["states"].keys())}


@app.get("/lgas/{state}")
def get_lgas(state: str):
    """
    Get SVG path data for all LGAs in a state.
    Returns viewbox string and list of LGA shapes.
    
    Example: GET /lgas/lagos
    """
    key = state.lower().strip()
    if key not in DATA["states"]:
        available = sorted(DATA["states"].keys())
        raise HTTPException(
            status_code=404,
            detail=f"State '{state}' not found. Available: {available}",
        )
    return DATA["states"][key]


@app.get("/lgas/{state}/with-ratings")
def get_lgas_with_ratings(state: str):
    """
    Get LGA shapes merged with live ratings.
    Currently returns shape data only — ratings merge coming soon.
    """
    key = state.lower().strip()
    if key not in DATA["states"]:
        raise HTTPException(status_code=404, detail=f"State '{state}' not found.")

    state_data = DATA["states"][key]

    # TODO: query your Railway Postgres ratings table and merge in here
    # For now returns the base shape data with placeholder fields
    lgas_with_ratings = [
        {
            **lga,
            "rating": None,
            "reviews_count": 0,
            "lgi_name": None,
        }
        for lga in state_data["lgas"]
    ]

    return {
        "viewbox": state_data["viewbox"],
        "lgas": lgas_with_ratings,
    }