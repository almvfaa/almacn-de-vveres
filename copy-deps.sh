#!/bin/bash
# copy-deps.sh

# Create the target directory if it doesn't exist
mkdir -p public/node_modules

# Copy lit
mkdir -p public/node_modules/lit
cp -r node_modules/lit/*.js public/node_modules/lit/
cp -r node_modules/lit/*.js.map public/node_modules/lit/
cp -r node_modules/lit/decorators.* public/node_modules/lit/
cp -r node_modules/lit/directives.* public/node_modules/lit/

# Copy vis-network
mkdir -p public/node_modules/vis-network/dist
cp -r node_modules/vis-network/dist/vis-network.esm.min.js public/node_modules/vis-network/dist/

# Copy firebase
mkdir -p public/node_modules/firebase
cp -r node_modules/firebase/*.js public/node_modules/firebase/
cp -r node_modules/firebase/*.js.map public/node_modules/firebase/
cp -r node_modules/firebase/app public/node_modules/firebase/
cp -r node_modules/firebase/auth public/node_modules/firebase/
cp -r node_modules/firebase/firestore public/node_modules/firebase/
cp -r node_modules/firebase/storage public/node_modules/firebase/
cp -r node_modules/firebase/analytics public/node_modules/firebase/
