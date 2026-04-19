from pydantic import BaseModel, EmailStr
from typing import Optional, Literal
from datetime import datetime
from uuid import UUID


# -------------------------------------------------------------------
# BaseSchema
# -------------------------------------------------------------------
# This is a shared base model for schemas that will receive data
# from objects (like ORM models, database rows, etc.), not just dicts.
#
# `from_attributes = True` tells Pydantic:
# "You can read values from object attributes (obj.field)
#  instead of only dictionary keys (dict['field'])."
#
# This is especially important when returning database models directly
# in FastAPI responses.
# -------------------------------------------------------------------
class BaseSchema(BaseModel):
    class Config:
        from_attributes = True


# -------------------------------------------------------------------
# PublicProfile
# -------------------------------------------------------------------
# This is the "safe" version of a user profile.
# Use this when exposing user data publicly (e.g., on a map, leaderboard).
#
# DOES NOT include sensitive info like email.
# -------------------------------------------------------------------
class PublicProfile(BaseSchema):
    id: UUID                 # Unique identifier for the user
    username: str            # Public-facing username
    created_at: datetime     # When the account was created


# -------------------------------------------------------------------
# ProfileResponse
# -------------------------------------------------------------------
# This is the FULL profile returned to the authenticated user.
# Used for endpoints like `/me`.
#
# Includes private data like email.
# -------------------------------------------------------------------
class ProfileResponse(BaseSchema):
    id: UUID
    username: str
    full_name: str
    email: EmailStr          # Validated email format
    theme: Optional[Literal["Light", "Dark", "Auto"]] = "Auto"
    # Theme is restricted to known values to prevent invalid input
    created_at: datetime


# -------------------------------------------------------------------
# ProfileCreate
# -------------------------------------------------------------------
# This is the input schema for creating a new user.
# Used in signup endpoints.
#
# IMPORTANT:
# - No `id` here → backend generates it (never trust client for IDs)
# - No `created_at` → backend sets it
# -------------------------------------------------------------------
class ProfileCreate(BaseModel):
    username: str
    full_name: str
    email: EmailStr
    theme: Optional[Literal["Light", "Dark", "Auto"]] = "Auto"


# -------------------------------------------------------------------
# ProfileUpdate
# -------------------------------------------------------------------
# This is used for PATCH/PUT updates.
#
# All fields are optional because:
# - User might update only one field (e.g., just username)
# - We DON'T want to overwrite fields unintentionally
#
# IMPORTANT:
# Default is None, NOT "Auto", so we can detect:
# - "field not sent" vs "field intentionally changed"
# -------------------------------------------------------------------
class ProfileUpdate(BaseModel):
    username: Optional[str] = None
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None
    theme: Optional[Literal["Light", "Dark", "Auto"]] = None