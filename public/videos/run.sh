for file in *; do
  if [[ -f "$file" && "${file##*.}" != "mp4" ]]; then
    ffmpeg -i "$file" -c:v libx264 -c:a aac "${file%.*}.mp4"
  fi
done
