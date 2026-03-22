import subprocess
import os

os.chdir(r"C:\Users\A\zhangxin-website")

# Add files
result = subprocess.run(["git", "add", "-A"], capture_output=True, text=True)
print("add:", result.returncode, result.stdout, result.stderr)

# Commit
result = subprocess.run(["git", "commit", "-m", "更新：添加子人格疗法内容和微信联系方式"], capture_output=True, text=True)
print("commit:", result.returncode, result.stdout, result.stderr)

# Push
result = subprocess.run(["git", "push", "-f"], capture_output=True, text=True)
print("push:", result.returncode, result.stdout, result.stderr)
