#!/bin/bash
set -e

# Start the generator or a dummy server if needed for Railway health checks
# Note: Railway often needs a 'web' process to stay alive
python generate.py
# If you need it to stay up as a background worker, you can just exit or start a dummy server.
# For now, let's just make sure it runs the script.
# This means you can also pre-generate and commit data/nigeria-lgas.json
# to skip the network fetch on every deploy.
if [ ! -f "data/nigeria-lgas.json" ]; then
  echo "📦 data/nigeria-lgas.json not found — generating..."
  python generate.py
else
  echo "✅ data/nigeria-lgas.json already exists — skipping generation"
fi

exec uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"