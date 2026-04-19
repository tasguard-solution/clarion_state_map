from fastapi import APIRouter, HTTPException, Depends
import pandas as pd
import json
from pathlib import Path

from auth import get_current_user

# Initialize the API router for election-related endpoints
router = APIRouter(prefix="/election", tags=["election"], dependencies=[Depends(get_current_user)])

# Define the directory where election data is stored
DATA_DIR = Path("data/election")
# Load the first CSV file matching 'LGALevelResult.csv' found in the data directory into a global DataFrame
lga_df = pd.read_csv(next(DATA_DIR.glob("LGALevelResult.csv")))


def total(state: str = None, lga: str = None) -> dict:
    """
    Helper function to calculate the total votes for political parties (APC, PDP, LP, NNPP).
    Can filter the dataset globally, by a specific State, or by a specific Local Government Area (LGA).
    """
    # Determine the filtering level based on provided arguments
    if state is None and lga is None:
        # No filters applied; use the entire dataset (National level)
        df = lga_df
    elif lga is not None:
        # Filter the dataset for a specific LGA
        df = lga_df[lga_df["LGA"] == lga]
    else:
        # Filter the dataset for a specific State
        df = lga_df[lga_df["State"] == state]

    # If the filtered DataFrame is empty (no matches found), raise a 404 error
    if df.empty:
        raise HTTPException(status_code=404, detail="Missing LGALevelResult.csv")

    try:
        # Calculate the sum of votes for each major party and cast to integer
        APC_total = int(df["APC"].sum())
        PDP_total = int(df["PDP"].sum())
        LP_total = int(df["LP"].sum())
        NNPP_total = int(df["NNPP"].sum())

        # Return the aggregated totals as a dictionary
        return {"APC": APC_total, "PDP": PDP_total, "LP": LP_total, "NNPP": NNPP_total}
    except StopIteration:
        # Catch StopIteration (though standard pandas sum operations typically do not raise this)
        raise HTTPException(status_code=404, detail="Result not found")


@router.get("/total-by-nation")
def total_by_nation():
    """
    Endpoint to get the aggregated vote totals for the entire nation.
    """
    return total()


@router.get("/total-by-state/{state}")
def total_by_state(state: str):
    """
    Endpoint to get the aggregated vote totals for a specific state.
    """
    # Validate that the requested state exists in the dataset before querying
    if state in lga_df["State"].unique():
        return total(state=state)
    else:
        # Raise a 400 Bad Request if the state is not found in the unique values
        raise HTTPException(status_code=400, detail=f"No state named {state}")


@router.get("/total-by-lga/{lga}")
def total_by_lga(lga: str):
    """
    Endpoint to get the aggregated vote totals for a specific Local Government Area (LGA).
    """
    # Validate that the requested LGA exists in the dataset before querying
    if lga in lga_df["LGA"].unique():
        return total(lga=lga)
    else:
        # Raise a 400 Bad Request if the LGA is not found
        # (Note: Original error message references 'state' instead of 'lga')
        raise HTTPException(status_code=400, detail=f"No state named {lga}")