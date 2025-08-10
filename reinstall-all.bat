@echo off
echo 🔧 Réinstallation complète des dépendances
echo.

REM Définir les chemins Node.js
set NODE_PATH=c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64

echo 🧹 Nettoyage des anciens fichiers...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
if exist .next rmdir /s /q .next

echo 📦 Installation des dépendances principales...
"%NODE_PATH%\npm.cmd" install next@latest react@latest react-dom@latest

echo 🎨 Installation des dépendances de développement...
"%NODE_PATH%\npm.cmd" install --save-dev typescript @types/node @types/react @types/react-dom

echo 🎭 Installation de Tailwind CSS...
"%NODE_PATH%\npm.cmd" install --save-dev tailwindcss autoprefixer postcss

echo ✨ Installation des animations et icônes...
"%NODE_PATH%\npm.cmd" install framer-motion
"%NODE_PATH%\npm.cmd" install lucide-react

echo 🔍 Vérification de l'installation...
"%NODE_PATH%\npm.cmd" list lucide-react

echo ✅ Installation terminée !
echo.
echo 🚀 Lancement du serveur...
"%NODE_PATH%\npm.cmd" run dev

pause
