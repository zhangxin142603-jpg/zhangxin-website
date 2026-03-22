Get-Process | Where-Object { $_.ProcessName -like "*git*" } | Select-Object Id, ProcessName, Path
