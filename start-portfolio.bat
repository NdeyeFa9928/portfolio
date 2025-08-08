@echo off
echo 🚀 Lancement du Portfolio - Version Finale
echo.

REM Définir les chemins Node.js
set NODE_PATH=c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64
set PATH=%NODE_PATH%;%PATH%

echo 📦 Installation rapide des dépendances manquantes...
"%NODE_PATH%\npm.cmd" install next react react-dom framer-motion --save
"%NODE_PATH%\npm.cmd" install typescript @types/node @types/react @types/react-dom --save-dev
"%NODE_PATH%\npm.cmd" install tailwindcss autoprefixer postcss --save-dev

echo ✅ Dépendances installées
echo.
echo 🌐 Lancement du serveur sur http://localhost:3000
echo 💫 Votre portfolio personnalisé est prêt !
echo.

REM Lancer Next.js
"%NODE_PATH%\npx.cmd" next dev

pause
