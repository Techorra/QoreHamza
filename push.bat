@echo off
echo ============================================
echo   Git Push - Portfolio Website
echo ============================================
echo.

echo Adding all changes...
git add .

echo.
echo Enter your commit message:
set /p commitmsg=

if "%commitmsg%"=="" (
    set commitmsg=Updated portfolio website
)

echo.
echo Committing changes: %commitmsg%
git commit -m "%commitmsg%"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ============================================
echo   Done! Your site is now live on GitHub!
echo ============================================
pause
