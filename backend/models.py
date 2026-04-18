"""
models.py
"""
from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from database import Base
from datetime import datetime
import uuid

class ProfilePublic(Base):
    __tablename__ = "profiles_public"

    #
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True, nullable=False)
    created_at= Column(DateTime(timezone=True), default=datetime.utcnow)

class ProfilePrivate(Base):
    __tablename__ = "profiles_private"

    id = Column(UUID(as_uuid=True), ForeignKey("profiles_public.id"), primary_key=True)
    full_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    theme = Column(String, nullable=False, default="Auto")
    created_at = Column(DateTime(timezone=True), default=datetime.utcnow)
