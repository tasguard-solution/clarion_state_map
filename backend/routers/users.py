from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import session
from typing import List

import models
import schemas
from auth import get_current_user

router = APIRouter(prefix="/api/users", tags=["Users"])

@router.get("/me", response_model=schemas.ProfileResponse)
def read_user_me(current_user: models.ProfilePublic = Depends(get_current_user)):
    """
    Get current logged in user profile using JWT token
    """
    return current_user

@router.get("/all", response_model=schemas.PublicProfile)
def read_all_users(current_user: models.ProfilePublic = Depends(get_current_user)):
    """
    Will return all users list in-case a search is needed (Might be too much info)
    """
    return {"message": "On it."}