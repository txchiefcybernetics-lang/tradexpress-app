#!/bin/bash
fswatch -o . | while read f; do
  git add .
  git commit -m "auto sync $f" 
  git push
  vercel --prod --yes
done
