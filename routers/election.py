import os

from fastapi import APIRouter, HTTPException, Depends
import pandas as pd
import json
from pathlib import Path


router = APIRouter(prefix="/election", tags=["election"])

DATA_DIR = Path("data/election")
lga_df = pd.read_csv(next(DATA_DIR.glob("LGALevelResult.csv")))


def total() -> dict:

    try:
        APC_total = int(lga_df["APC"].sum())
        PDP_total = int(lga_df["PDP"].sum())
        LP_total = int(lga_df["LP"].sum())
        NNPP_total = int(lga_df["NNPP"].sum())

        return {"APC": APC_total, "PDP": PDP_total, "LP": LP_total, "NNPP": NNPP_total}
    except StopIteration:
        HTTPException(status_code=404, detail="Result not found")
        return {"error": "Result not found"}





@router.get("/total-by-party")
def total_by_party():
    return total()


