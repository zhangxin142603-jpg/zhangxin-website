$ErrorActionPreference = "Stop"

# Use 8.3 short name
$src = "C:\Users\A\Desktop\???~2.JPG"
$dst = "C:\Users\A\zhangxin-website\public\zhangxin.jpg"

Write-Host "Reading from: $src"
$bytes = [System.IO.File]::ReadAllBytes($src)
Write-Host "Read $($bytes.Length) bytes"

[System.IO.File]::WriteAllBytes($dst, $bytes)
Write-Host "Written to: $dst"
Write-Host "Done!"
