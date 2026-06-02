#!/usr/bin/env bash
# Strip EXIF metadata (camera serial, GPS, owner, etc.) from every photo in
# public/photos/. Run once after adding new photos. Idempotent.
#
# Requirements: exiftool (brew install exiftool)
# Usage: bash scripts/strip-exif.sh

set -euo pipefail

if ! command -v exiftool >/dev/null 2>&1; then
  echo "exiftool not installed. Install with: brew install exiftool" >&2
  exit 1
fi

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/photos"

echo "Stripping EXIF from $DIR ..."
exiftool -overwrite_original -all= -tagsfromfile @ -ColorSpaceTags "$DIR"/*.jpg "$DIR"/*.png 2>/dev/null || true
echo "Done."
