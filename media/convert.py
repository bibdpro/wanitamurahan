"""
MP4 to JPG Converter

Author: [Wanita Murahan]
Date: [1 Februari 2024]
"""

import os
import subprocess

def convert_mp4_to_jpg():
    video_folder = os.path.join(os.getcwd(), "video")
    image_folder = os.path.join(os.getcwd(), "image")

    os.makedirs(image_folder, exist_ok=True)

    for video_file in os.listdir(video_folder):
        if video_file.endswith(".mp4"):
            video_path = os.path.join(video_folder, video_file)
            image_path = os.path.join(image_folder, f"{os.path.splitext(video_file)[0]}.jpg")

            subprocess.run(["ffmpeg", "-i", video_path, "-vf", "thumbnail", "-frames:v", "1", image_path])

if __name__ == "__main__":
    print("Starting MP4 to JPG conversion...")
    convert_mp4_to_jpg()
    print("Conversion completed successfully!")
