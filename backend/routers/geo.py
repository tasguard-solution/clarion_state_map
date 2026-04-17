import json
import re
from pathlib import Path
from fastapi import APIRouter, HTTPException

route = APIRouter(prefix="/geo", tags=["geo"])

DATA_DIR = Path("data/geo")
SLUG_PATTERN = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
def _available_states() -> list[str]:
    """Return all state slugs that have a generated JSON file."""
    return sorted(
        p.stem for p in DATA_DIR.glob("*.json")
        if not p.stem.startswith("_")  # exclude _geojson_cache
    )


def _load_state(slug: str) -> dict:
    if not SLUG_PATTERN.fullmatch(slug):
        raise HTTPException(status_code=400, detail="Invalid state slug format")

    base_dir = DATA_DIR.resolve()
    path = (base_dir / f"{slug}.json").resolve()

    try:
        path.relative_to(base_dir)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid state path")

    if not path.exists():
        raise HTTPException(
            status_code=404,
            detail=f"State '{slug}' not found. Available: {_available_states()}",
        )
    return json.loads(path.read_text(encoding="utf-8"))

def _load_nation() -> dict:
    path = DATA_DIR

    if not path.exists():
        raise HTTPException(
            status_code=404,
            detail=f"States not available yet in {DATA_DIR}"
        )
    state_data = {}

    for p in DATA_DIR.glob("*.json"):
        if p.stem.startswith("_"):
            continue
        data = json.loads(p.read_text(encoding="utf-8"))
        state_data[p.stem] = data

    return state_data

@route.get("")
def root():
    states = _available_states()
    return {
        "service": "Nigeria LGA Map API",
        "states_available": len(states),
        "endpoints": ["/states", "/lgas/{state}", "/lgas/{state}/with-ratings"],
    }

@route.get("/states")
def list_states():
    """List all available state slugs."""
    return {"states": _available_states()}

@route.get("/nation")
def get_nation():
    """
    Get entire nation shapes.
    Currently returns shape data only.
    """
    return _load_nation()

@route.get("/states/{state}")
def get_state(state: str):
    """
    Get SVG path data for all LGAs in a state.
    Returns viewbox string and list of LGA shapes.

    Example: GET /lgas/lagos
    """
    return _load_state(state.lower().strip().replace(" ", "-"))


