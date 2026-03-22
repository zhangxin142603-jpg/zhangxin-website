import os
import shutil

# Get the PDF filename
desktop = os.path.expanduser("~/Desktop")
pdf_name = None
for f in os.listdir(desktop):
    if f.startswith("SPT") and f.endswith(".pdf"):
        pdf_name = f
        break

if pdf_name:
    src = os.path.join(desktop, pdf_name)
    dst = os.path.join(desktop, "spt.pdf")
    shutil.copy(src, dst)
    print(f"Copied to: {dst}")
else:
    print("PDF not found")
