# Read photo as base64 and write to new location
$src = "C:\Users\A\Desktop\微信图片_20260319120931_921_3.jpg"
$dst = "C:\Users\A\zhangxin-website\public\zhangxin.jpg"

# Read as byte array and save
$bytes = [System.IO.File]::ReadAllBytes($src)
[System.IO.File]::WriteAllBytes($dst, $bytes)

Write-Host "File copied"
Write-Host "Size: $($bytes.Length)"
