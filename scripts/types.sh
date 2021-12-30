#!/usr/bin/bash

echo "Generating module types..."

npx tcm -w src &
npx tsm -w src