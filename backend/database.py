import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from dotenv import load_dotenv

load_dotenv()

# PRIMARY_DB_URL
PRIMARY_DB_URL = os.getenv("PRIMARY_DB_URL")

# Check if it exists
if not PRIMARY_DB_URL:
    raise ValueError("PRIMARY_DB_URL has not been set")

# Engine for primary database
engine = create_engine(PRIMARY_DB_URL, echo=True, pool_pre_ping=True)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# The function needed to safegaurd API routes
def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()

