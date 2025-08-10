@echo off
echo 🚀 Lancement immédiat du portfolio
echo.

set NODE_DIR=c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64
set PATH=%NODE_DIR%;%PATH%

echo 📍 Répertoire de travail : %CD%
echo 🔧 Node.js : %NODE_DIR%\node.exe
echo.

echo 🌐 Démarrage du serveur...
"%NODE_DIR%\node.exe" "%NODE_DIR%\node_modules\npm\bin\npm-cli.js" run dev

pause
