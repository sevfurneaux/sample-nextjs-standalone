#!/bin/sh

# Exit immediately if a command exits with a non-zero status
set -e

# Run build and start commands
npm run build
npm run start