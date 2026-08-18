"""
TechLens AI — High-Performance Video Streaming Service
Provides full HTTP Range header support (206 Partial Content) for smooth HTML5 video playback,
instant seeking, and robust handling of filenames with spaces, dates, and special characters.
"""

import os
import mimetypes
from fastapi import Request, HTTPException
from fastapi.responses import StreamingResponse

CHUNK_SIZE = 1024 * 1024  # 1MB chunks for smooth streaming


def stream_video_file(filepath: str, request: Request):
    if not os.path.exists(filepath):
        raise HTTPException(status_code=404, detail="Video file not found")

    file_size = os.path.getsize(filepath)
    content_type, _ = mimetypes.guess_type(filepath)
    if not content_type:
        content_type = "video/mp4"

    range_header = request.headers.get("range")

    if range_header:
        # Parse byte range (e.g. "bytes=0-1048575" or "bytes=1048576-")
        range_value = range_header.strip().lower().replace("bytes=", "")
        parts = range_value.split("-")
        start = int(parts[0]) if parts[0] else 0
        end = int(parts[1]) if len(parts) > 1 and parts[1] else min(start + CHUNK_SIZE - 1, file_size - 1)
        end = min(end, file_size - 1)
        content_length = end - start + 1

        def iterfile():
            with open(filepath, "rb") as f:
                f.seek(start)
                bytes_left = content_length
                while bytes_left > 0:
                    read_size = min(CHUNK_SIZE, bytes_left)
                    data = f.read(read_size)
                    if not data:
                        break
                    bytes_left -= len(data)
                    yield data

        headers = {
            "Content-Range": f"bytes {start}-{end}/{file_size}",
            "Accept-Ranges": "bytes",
            "Content-Length": str(content_length),
            "Content-Type": content_type,
            "Cache-Control": "public, max-age=3600",
        }
        return StreamingResponse(iterfile(), status_code=206, headers=headers)

    # If no Range header, stream standard full file
    def iterfile_full():
        with open(filepath, "rb") as f:
            while chunk := f.read(CHUNK_SIZE):
                yield chunk

    headers = {
        "Accept-Ranges": "bytes",
        "Content-Length": str(file_size),
        "Content-Type": content_type,
        "Cache-Control": "public, max-age=3600",
    }
    return StreamingResponse(iterfile_full(), status_code=200, headers=headers)
