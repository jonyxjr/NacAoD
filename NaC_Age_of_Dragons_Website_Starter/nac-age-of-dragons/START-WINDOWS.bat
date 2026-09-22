@echo off
setlocal
cd /d "%~dp0"
echo ==============================================
echo NaC - Age of Dragons Website
 echo ==============================================
echo.
echo Installing dependencies...
npm install
if errorlevel 1 (
  echo.
  echo npm install failed. Make sure Node.js 20+ and internet access are available.
  pause
  exit /b 1
)
echo.
echo Starting development server...
npm run dev
pause
