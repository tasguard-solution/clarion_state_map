"""
auth.py
"""

import os
import jwt
from jwt import PyJWKClient
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session
from database import get_db
from models import ProfilePublic
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize the HTTPBearer security scheme for FastAPI
security = HTTPBearer()

# Retrieve Supabase URL from environment variables
VITE_SUPABASE_URL = os.getenv("VITE_SUPABASE_URL")

# Ensure the required Supabase URL is present
if not VITE_SUPABASE_URL:
    raise ValueError("VITE_SUPABASE_URL has not been set")

# Construct the URL for the JSON Web Key Set (JWKS) to verify JWT signatures
JWKS_URL = f"{VITE_SUPABASE_URL.rstrip('/')}/auth/v1/.well-known/jwks.json"
jwks_client = PyJWKClient(JWKS_URL)

def verify_token(token: str) -> str:
    """
    Decodes and validates a JWT using the public keys from the JWKS endpoint.
    Returns the user ID (subject) if valid.
    """
    try:
        # Fetch the correct signing key based on the token's kid header
        signing_key = jwks_client.get_signing_key_from_jwt(token)

        # Decode the JWT using the ES256 algorithm used by Supabase
        payload = jwt.decode(
            token,
            signing_key.key,
            algorithms=["ES256"],
            options={"verify_aud": False}  # Audience verification disabled
        )

        # Extract the user ID (sub) from the token payload
        user_id: str = payload.get("sub")
        if user_id is None:
            raise ValueError("Token missing subject (sub)")

        return user_id

    except jwt.ExpiredSignatureError:
        # Handle cases where the token has passed its expiration time
        print("JWT Error: Token expired")
        raise ValueError("Token expired")

    except jwt.InvalidSignatureError:
        # Handle cases where the token signature does not match
        print("JWT Error: Invalid signature")
        raise ValueError("Invalid signature")

    except Exception as e:
        # General catch-all for other validation failures (e.g., malformed tokens)
        print(f"JWT Error: {str(e)}")
        raise ValueError(f"Could not validate credentials: {str(e)}")

def get_current_user_id(credentials: HTTPAuthorizationCredentials = Depends(security),) -> str:
    """
    FastAPI dependency that extracts the Bearer token from the request header
    and validates it to return the user's unique identifier.
    """
    # Extract the raw string token from the Authorization header
    token = credentials.credentials

    try:
        # Validate the token and return the 'sub' claim (user_id)
        return verify_token(token)
    except ValueError as e:
        # Raise a 401 error if the token is expired, invalid, or missing
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(e),
            headers={"WWW-Authenticate": "Bearer"}
        )


def get_current_user(user_id: str = Depends(get_current_user_id()), db: Session = Depends(get_db)):
    """
    FastAPI dependency that fetches the full user profile from the database
    using the validated user_id.
    """
    # Query the ProfilePublic table for a record matching the token's user_id
    user = db.query(ProfilePublic).filter(ProfilePublic.id == user_id).first()

    if user is None:
        # Raise a 404 error if the token is valid but no profile exists in the DB
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found"
        )