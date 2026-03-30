#!/bin/bash

echo "Starting backend..."
cd server || exit
npm start &
cd ..

echo "Starting frontend..."
cd client || exit
npm start &
cd ..
