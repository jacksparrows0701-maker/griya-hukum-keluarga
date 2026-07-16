@echo off
title Griya Hukum Keluarga - Hugo Server
echo ============================================
echo   Griya Hukum Keluarga - Local Server
echo ============================================
echo.
echo Starting Hugo server...
echo Buka browser ke: http://localhost:1313/
echo Tekan Ctrl+C untuk menghentikan server.
echo.
cd /d "%~dp0"
hugo server -D --disableLiveReload
pause
