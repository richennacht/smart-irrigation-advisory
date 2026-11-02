@echo off
cd /d "%~dp0"
where node >nul 2>nul || (echo Install Node.js first from https://nodejs.org/ & pause & exit /b 1)
if not exist "node_modules\vite\bin\vite.js" (
  call npm install
  if errorlevel 1 (echo Installation failed. & pause & exit /b 1)
)
call npm start
pause
