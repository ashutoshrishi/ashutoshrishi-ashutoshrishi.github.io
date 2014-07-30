#!/bin/sh

echo "Building Boostrap..."
cd assets/_bootstrap
grunt dist
echo "Done building, copying to assets..."
cp -r dist/* ../
