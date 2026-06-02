#!/usr/bin/env bash
# Resize + recompress every JPG in public/photos/ to a web-friendly size.
# Originals are NOT preserved — recover them from git history if needed:
#   git log --oneline --all -- public/photos/band-hero.jpg
#   git checkout <commit> -- public/photos/band-hero.jpg
#
# Target: max 1800px on the longest edge, JPEG quality 70.
# A hero photo ends up ~400 KB instead of 7 MB. Quality is still print-OK.
#
# Requirements: sips (built into macOS — no install needed).
# Usage: bash scripts/optimize-photos.sh

set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/photos"
TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT

count=0
for f in "$DIR"/*.jpg; do
  name=$(basename "$f")
  sips -Z 1800 -s format jpeg -s formatOptions 70 "$f" --out "$TMP/$name" > /dev/null 2>&1
  mv "$TMP/$name" "$f"
  count=$((count + 1))
done

echo "Optimized $count JPG(s) in $DIR"
du -sh "$DIR"
