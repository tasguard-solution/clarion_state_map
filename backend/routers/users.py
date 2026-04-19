from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from pydantic import BaseModel

import models
import schemas
from auth import get_current_user, get_current_user_id
from database import get_db

router = APIRouter(prefix="/api/users", tags=["Users"])

class SyncPayload(BaseModel):
    email: str

@router.post("/sync")
def sync_user(payload: SyncPayload, user_id: str = Depends(get_current_user_id), db: Session = Depends(get_db)):
    """
    Called by the frontend immediately after a successful Supabase login/signup.
    Checks if the user exists in the backend Postgres DB, and creates them if not.
    """
    user_public = db.query(models.ProfilePublic).filter(models.ProfilePublic.id == user_id).first()
    
    if user_public:
        return {"status": "already_synced", "message": "User profile exists."}
    
    # Generate generic info based on email
    base_username = payload.email.split("@")[0]
    
    try:
        # 1. Create Public Profile
        new_public = models.ProfilePublic(id=user_id, username=base_username)
        db.add(new_public)
        db.flush() # flush so we can link ProfilePrivate
        
        # 2. Create Private Profile
        new_private = models.ProfilePrivate(
            id=user_id, 
            full_name=base_username, 
            email=payload.email,
            theme="Auto"
        )
        db.add(new_private)
        db.commit()
        return {"status": "synced", "message": "New backend profile created successfully."}
        
    except IntegrityError:
        # Username collision fallback
        db.rollback()
        unique_username = f"{base_username}_{str(user_id)[:4]}"
        
        new_public = models.ProfilePublic(id=user_id, username=unique_username)
        db.add(new_public)
        db.flush()
        
        new_private = models.ProfilePrivate(
            id=user_id, 
            full_name=base_username, 
            email=payload.email,
            theme="Auto"
        )
        db.add(new_private)
        db.commit()
        return {"status": "synced", "message": "New backend profile created with fallback username."}

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