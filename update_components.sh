#!/bin/bash

# Add "use client" to About components if missing
for file in components/About/*.tsx; do
  if ! grep -q '"use client"' "$file"; then
    sed -i '1i "use client";' "$file"
  fi
done

# Add "use client" to Production components if missing
for file in components/Production/*.tsx; do
  if ! grep -q '"use client"' "$file"; then
    sed -i '1i "use client";' "$file"
  fi
done

# Add "use client" to Products components if missing
for file in components/Products/*.tsx; do
  if ! grep -q '"use client"' "$file"; then
    sed -i '1i "use client";' "$file"
  fi
done

echo "✅ Added 'use client' directives to all necessary components"
