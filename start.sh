#!/bin/bash
set -e

# Only regenerate if the data file doesn't exist yet.
# This means you can also pre-generate and commit data/nigeria-lgas.json
# to skip the network fetch on every deploy.
if [ ! -f "data/nigeria-lgas.json" ]; then
  echo "📦 data/nigeria-lgas.json not found — generating..."
  python generate.py
else
  echo "✅ data/nigeria-lgas.json already exists — skipping generation"
fi

exec uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"