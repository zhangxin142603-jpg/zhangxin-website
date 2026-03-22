import zipfile
import os
import re
import sys

# Find the docx file
desktop = os.path.expanduser("~/Desktop")
docx_file = None
for f in os.listdir(desktop):
    if f.startswith("SPT") and f.endswith(".docx"):
        docx_file = os.path.join(desktop, f)
        break

if not docx_file:
    print("DOCX not found")
    sys.exit()

print(f"Reading: {docx_file}")

# Extract and read document.xml
with zipfile.ZipFile(docx_file, 'r') as z:
    if 'word/document.xml' in z.namelist():
        content = z.read('word/document.xml')
        text = content.decode('utf-8')
        
        # Extract all text between <w:t> tags
        texts = re.findall(r'<w:t[^>]*>([^<]*)</w:t>', text)
        
        # Join and print
        full_text = '\n'.join(texts)
        
        # Print directly
        sys.stdout.buffer.write(full_text[:15000].encode('utf-8'))
