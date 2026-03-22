# Copy the WeChat photo to public folder using wildcard
$desktop = [Environment]::GetFolderPath("Desktop")
$src = Get-ChildItem -Path $desktop -Filter "*921_3*" | Select-Object -First 1
$dst = "C:\Users\A\zhangxin-website\public\zhangxin.jpg"

if ($src) {
    Write-Host "Source: $($src.FullName)"
    Write-Host "Source size: $($src.Length)"
    
    $bytes = [System.IO.File]::ReadAllBytes($src.FullName)
    [System.IO.File]::WriteAllBytes($dst, $bytes)
    
    Write-Host "Copied to: $dst"
    Write-Host "Copied size: $bytes.Length"
} else {
    Write-Host "Source file not found"
}
