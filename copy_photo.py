import shutil
import os

# Copy photo to public folder
src = r"C:\Users\A\Desktop\微信图片_20260319120931_921_3.jpg"
dst = r"C:\Users\A\zhangxin-website\public\zhangxin.jpg"

# Create public folder if not exists
os.makedirs(os.path.dirname(dst), exist_ok=True)

# Copy file
shutil.copy2(src, dst)
print(f"Copied to: {dst}")
print(f"File exists: {os.path.exists(dst)}")
print(f"File size: {os.path.getsize(dst)} bytes")
