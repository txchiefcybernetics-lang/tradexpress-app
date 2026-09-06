#!/bin/bash

set -e

cd ~/tradexpress-app

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
npm install

echo "Building TradeXpress..."
npm run build

echo "Restarting application..."
pm2 restart tradexpress

echo "Deployment complete!"
