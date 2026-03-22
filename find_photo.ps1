# Find the jpg file on desktop
$desktop = [Environment]::GetFolderPath("Desktop")
Write-Host "Desktop: $desktop"

# List all jpg files
$jpgFiles = Get-ChildItem -Path $desktop -Filter "*.jpg" | Select-Object Name, Length
Write-Host "JPG files:"
$jpgFiles | Format-Table

# Find the WeChat image (contains specific pattern)
$wechatImg = Get-ChildItem -Path $desktop -Filter "*921_3*" | Select-Object FullName
if ($wechatImg) {
    Write-Host "Found: $($wechatImg.FullName)"
}
