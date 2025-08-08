@echo off
echo 🚀 Lancement définitif du portfolio avec toutes les nouveautés
echo.

REM Définir les chemins Node.js
set NODE_PATH=c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64
set PATH=%NODE_PATH%;%PATH%

echo 📋 Configuration de l'environnement...
echo Node.js: %NODE_PATH%\node.exe
echo npm: %NODE_PATH%\npm.cmd
echo.

echo 🔍 Vérification des versions...
"%NODE_PATH%\node.exe" --version
"%NODE_PATH%\npm.cmd" --version
echo.

echo 📦 Vérification des dépendances...
if not exist "node_modules\lucide-react" (
    echo ❌ lucide-react manquant, installation...
    "%NODE_PATH%\npm.cmd" install lucide-react --force
)

echo ✅ Toutes les dépendances sont prêtes
echo.
echo 🌐 Lancement du serveur sur http://localhost:3000
echo 💫 Votre portfolio personnalisé avec :
echo    • Section Hero avec vos informations
echo    • Projets COLAS, Hôpital Yvetot, UPV Valencia
echo    • Animations Framer Motion
echo    • Design moderne et responsive
echo.

REM Lancer Next.js avec le bon chemin
cd /d "%~dp0"
"%NODE_PATH%\node.exe" "%NODE_PATH%\node_modules\npm\bin\npm-cli.js" run dev

pause
