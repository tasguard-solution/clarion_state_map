from fastapi import APIRouter, HTTPException, Depends
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path


DATA_DIR = "../data/geo/"

DATA_DIR = Path(DATA_DIR)
print([p.stem for p in DATA_DIR.glob("*.json") if not p.stem.startswith("_")])# exclude _geojson_cache

print([p.stem for p in Path("../routers").glob("*.py") if not p.stem.startswith("_")])# exclude _geojson_cache

import os; print(os.getcwd())