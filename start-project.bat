@echo off
set dir=%cd%
start cmd.exe /K "cd /d %dir%\ && call yarn dev"
start cmd.exe /K "cd /d %dir%\ && call yarn server"
exit