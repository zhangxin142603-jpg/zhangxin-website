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

# Extract and read document.xml
with zipfile.ZipFile(docx_file, 'r') as z:
    # Get list of files
    files = z.namelist()
    print("Files in archive:", files[:10])
    
    # Read document.xml
    if 'word/document.xml' in files:
        content = z.read('word/document.xml')
        # Save to file for inspection
        with open('C:/Users/A/zhangxin-website/doc_content.xml', 'wb') as f:
            f.write(content)
        print("Saved document.xml")
