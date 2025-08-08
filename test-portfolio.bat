@echo off
echo 🧪 Test du Portfolio Next.js
echo.

REM Chemin vers votre installation Node.js
set NODE_PATH="c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64"

echo 📋 Vérification de l'environnement...
echo Node.js version:
%NODE_PATH%\node.exe --version
echo.

echo npm version:
%NODE_PATH%\npm.cmd --version
echo.

echo 📁 Contenu du dossier:
dir /b
echo.

echo 📦 Vérification des dépendances...
if exist "node_modules" (
    echo ✅ node_modules existe
) else (
    echo ❌ node_modules manquant - Exécutez install.bat d'abord
)

if exist "package.json" (
    echo ✅ package.json existe
) else (
    echo ❌ package.json manquant
)

echo.
echo 🌐 Pour démarrer le portfolio:
echo 1. Exécutez: install.bat (si pas encore fait)
echo 2. Exécutez: dev.bat
echo 3. Ouvrez: http://localhost:3000
echo.

pause
