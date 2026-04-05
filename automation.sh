#!/bin/bash

echo "Stopping existing processes..."


free_port() {
    local PORT=$1
    if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "Clearing port $PORT..."
        kill -9 $(lsof -Pi :$PORT -sTCP:LISTEN -t)
    fi
}

free_port 5000
free_port 5173

echo "Starting server..."
cd server || exit
# Ensure server dependencies are installed
npm install
# Start server 
npm run dev &
cd ..

echo "Starting client..."
cd client || exit
# Ensure client dependencies are installed
npm install
# Start client in the background
npm run dev &
cd ..

echo "App running successfully"
