#!/bin/bash
while true; do
  git add . 
  if ! git diff --cached --quiet; then
    git commit -m "auto sync $(date +'%H:%M:%S')"
    git push
    echo "✓ Auto-synced at $(date)"
  fi
  sleep 60
done
