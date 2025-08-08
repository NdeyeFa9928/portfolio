@echo off
echo 🚀 Lancement direct du portfolio Next.js
echo.

REM Chemin vers votre installation Node.js
set NODE_PATH="c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64"

echo 📋 Vérification des dépendances...
if not exist "node_modules\lucide-react" (
    echo ❌ lucide-react manquant
    echo 📦 Installation en cours...
    %NODE_PATH%\npm.cmd install lucide-react
)

echo ✅ Dépendances vérifiées
echo.
echo 🌐 Démarrage du serveur sur http://localhost:3000
echo 💡 Votre portfolio avec toutes les nouveautés sera disponible !
echo.

REM Définir le PATH pour inclure Node.js
set PATH=%NODE_PATH%;%PATH%

REM Lancer le serveur de développement
%NODE_PATH%\npm.cmd run dev

pause
