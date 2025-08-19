#!/bin/bash
echo "🔁 Starting auto-restart loop for your bot..."

while true
do
  npm start || echo "⚠️ Bot crashed. Restarting in 2 seconds..."
  sleep 2
done
