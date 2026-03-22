Get-ItemProperty C:\Users\A\zhangxin-website\.git\index | Select-Object Mode, IsReadOnly, Length, LastWriteTime
Get-ItemProperty C:\Users\A\zhangxin-website\.git\index.lock -ErrorAction SilentlyContinue | Select-Object Mode, IsReadOnly, Length, LastWriteTime
if ($null -eq (Get-ItemProperty C:\Users\A\zhangxin-website\.git\index.lock -ErrorAction SilentlyContinue)) { Write-Host "index.lock does not exist" }
