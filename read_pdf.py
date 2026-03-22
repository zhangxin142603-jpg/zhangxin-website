import os

# List desktop files
desktop = os.path.expanduser("~/Desktop")
files = os.listdir(desktop)
for f in files:
    if f.endswith('.pdf'):
        print(f)
