@echo off
echo 🚀 Démarrage du serveur de développement...
echo.

REM Chemin vers votre installation Node.js
set NODE_PATH="c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64"

REM Installation des dépendances si node_modules n'existe pas
if not exist "node_modules" (
    echo 📦 Installation des dépendances...
    %NODE_PATH%\npm.cmd install
    echo.
)

REM Démarrage du serveur de développement
echo 🌐 Lancement du serveur sur http://localhost:3000
%NODE_PATH%\npm.cmd run dev

pause
