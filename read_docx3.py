import zipfile
import os
import re

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
    if 'word/document.xml' in z.namelist():
        content = z.read('word/document.xml')
        text = content.decode('utf-8')
        
        # Extract all text between <w:t> tags
        texts = re.findall(r'<w:t[^>]*>([^<]*)</w:t>', text)
        
        # Join and print
        full_text = '\n'.join(texts)
        # Write to output file
        with open('C:/Users/A/zhangxin-website/output.txt', 'w', encoding='utf-8') as f:
            f.write(full_text)
        
        print("Extracted text length:", len(full_text))
        print("First 2000 chars:")
        print(full_text[:2000])
