@echo off
echo 🔧 Script de Résolution des Problèmes npm
echo.

REM Chemin vers votre installation Node.js
set NODE_PATH="c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64"

echo 📋 Diagnostic initial...
echo Node.js version:
%NODE_PATH%\node.exe --version
echo npm version:
%NODE_PATH%\npm.cmd --version
echo.

echo 🧹 Nettoyage des fichiers temporaires...
if exist node_modules (
    echo Suppression de node_modules...
    rmdir /s /q node_modules
)

if exist package-lock.json (
    echo Suppression de package-lock.json...
    del package-lock.json
)

if exist npm-debug.log (
    echo Suppression des logs d'erreur...
    del npm-debug.log
)

echo.
echo 🔄 Nettoyage du cache npm...
%NODE_PATH%\npm.cmd cache clean --force

echo.
echo 📦 Tentative 1: Installation standard...
%NODE_PATH%\npm.cmd install
if %ERRORLEVEL% EQU 0 (
    echo ✅ Installation réussie !
    goto :success
)

echo.
echo 📦 Tentative 2: Installation avec --legacy-peer-deps...
%NODE_PATH%\npm.cmd install --legacy-peer-deps
if %ERRORLEVEL% EQU 0 (
    echo ✅ Installation réussie !
    goto :success
)

echo.
echo 📦 Tentative 3: Installation avec --force...
%NODE_PATH%\npm.cmd install --force
if %ERRORLEVEL% EQU 0 (
    echo ✅ Installation réussie !
    goto :success
)

echo.
echo 📦 Tentative 4: Installation des dépendances une par une...
echo Installation de Next.js...
%NODE_PATH%\npm.cmd install next@latest
echo Installation de React...
%NODE_PATH%\npm.cmd install react@latest react-dom@latest
echo Installation de TypeScript...
%NODE_PATH%\npm.cmd install --save-dev typescript @types/node @types/react @types/react-dom
echo Installation de Tailwind CSS...
%NODE_PATH%\npm.cmd install --save-dev tailwindcss autoprefixer postcss

if %ERRORLEVEL% EQU 0 (
    echo ✅ Installation par étapes réussie !
    goto :success
)

echo.
echo ❌ Toutes les tentatives ont échoué.
echo.
echo 🔍 Suggestions de dépannage :
echo 1. Vérifiez votre connexion internet
echo 2. Essayez d'installer Node.js globalement
echo 3. Utilisez un autre registre npm : npm config set registry https://registry.npmjs.org/
echo 4. Contactez votre administrateur réseau (proxy/firewall)
echo.
goto :end

:success
echo.
echo 🎉 Installation terminée avec succès !
echo.
echo 🚀 Prochaines étapes :
echo 1. Exécutez : dev.bat
echo 2. Ouvrez : http://localhost:3000
echo 3. Personnalisez votre portfolio
echo.

:end
pause
