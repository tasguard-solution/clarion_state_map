#!/bin/bash
set -e
# If you need it to stay up as a background worker, you can just exit or start a dummy server.
# For now, let's just make sure it runs the script.
# This means you can also pre-generate and commit data/nigeria-lgas.json
# to skip the network fetch on every deploy.
if [ ! -f "data/geo/nigeria-lgas.json" ]; then
  echo "data/geo/nigeria-lgas.json not found - generating..."
  cd generators
  python geo.py
else
  echo "data/geo/nigeria-lgas.json already exists - skipping generation"

if [ ! -f "data/election/LGALevelResult.csv" ]; then
  echo "data/election/LGALevelResult.csv not found - generating... "
  cd generators
  python election.py
else
  echo "data/election/LGALevelResult.csv already exists - skipping generation"
fi

exec uvicorn main:app --host 0.0.0.0 --port "${PORT:-8000}"