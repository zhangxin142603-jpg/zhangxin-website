import zipfile
import os

# Find the docx file
desktop = os.path.expanduser("~/Desktop")
docx_file = None
for f in os.listdir(desktop):
    if f.startswith("SPT") and f.endswith(".docx"):
        docx_file = os.path.join(desktop, f)
        break

if not docx_file:
    print("DOCX not found")
    exit()

print(f"Reading: {docx_file}")

# Extract and read document.xml
with zipfile.ZipFile(docx_file, 'r') as z:
    # Read document.xml
    if 'word/document.xml' in z.namelist():
        content = z.read('word/document.xml')
        # Print as text (it's XML)
        text = content.decode('utf-8')
        # Print first 5000 chars
        print(text[:5000])
