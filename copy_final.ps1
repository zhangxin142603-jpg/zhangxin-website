$ErrorActionPreference = "Stop"
try {
    $src = Get-Item -LiteralPath "C:\Users\A\Desktop\微信图片_20260319120931_921_3.jpg"
    $dst = "C:\Users\A\zhangxin-website\public\zhangxin.jpg"
    
    Write-Host "Source: $($src.FullName)"
    Write-Host "Size: $($src.Length)"
    
    Copy-Item -LiteralPath $src.FullName -Destination $dst -Force
    Write-Host "Success!"
} catch {
    Write-Host "Error: $_"
    Write-Host "Trying alternative method..."
    
    # Alternative: read bytes and write manually
    $bytes = [System.IO.File]::ReadAllBytes($src.FullName)
    [System.IO.File]::WriteAllBytes($dst, $bytes)
    Write-Host "Done via bytes!"
}
