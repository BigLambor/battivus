#!/bin/bash

echo "=== Battivus Strapi Setup Script ==="

# Check if fnm is available
if command -v fnm &> /dev/null; then
    echo "✅ fnm found"
else
    echo "📦 Installing fnm via brew..."
    brew install fnm
fi

# Setup fnm environment
eval "$(fnm env --use-on-cd)"

# Install Node 20
echo "📦 Installing Node.js v20..."
fnm install 20
fnm use 20
fnm default 20

echo "Node version: $(node --version)"
echo "npm version: $(npm --version)"

# Stop mock API if running
echo "🛑 Stopping mock API..."
lsof -ti:1337 | xargs kill -9 2>/dev/null || true

# Create Strapi in cms directory
echo "🚀 Creating Strapi CMS..."
cd /Users/isadmin/MagicSpace/Battivus

# Remove old mock api folder (backup first)
if [ -d "api" ]; then
    mv api api-mock-backup
    echo "📁 Backed up mock API to api-mock-backup"
fi

# Create Strapi project
npx create-strapi-app@latest cms --quickstart --no-run

echo ""
echo "=== Setup Complete ==="
echo "To start Strapi, run:"
echo "  cd /Users/isadmin/MagicSpace/Battivus/cms && npm run develop"
echo ""
echo "Admin panel will be at: http://localhost:1337/admin"
