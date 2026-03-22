# Find website project directory
$paths = @(
    "C:\Users\A\zhangxin-website",
    "C:\Users\A\.qclaw\workspace\zhangxin-website",
    ".\zhangxin-website"
)

foreach ($p in $paths) {
    if (Test-Path "$p\package.json") {
        Write-Host "Found project at: $p"
        Set-Location $p
        break
    }
}

git status
