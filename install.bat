@echo off
echo 📦 Installation des dépendances du portfolio...
echo.

REM Chemin vers votre installation Node.js
set NODE_PATH="c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64"

REM Vérification de l'existence de Node.js
if not exist %NODE_PATH%\node.exe (
    echo ❌ Node.js non trouvé dans %NODE_PATH%
    echo Vérifiez le chemin d'installation.
    pause
    exit /b 1
)

echo ✅ Node.js trouvé : %NODE_PATH%
echo.

REM Affichage de la version
echo 📋 Version de Node.js :
%NODE_PATH%\node.exe --version
echo.

echo 📋 Version de npm :
%NODE_PATH%\npm.cmd --version
echo.

REM Installation des dépendances
echo 🔄 Installation en cours...
%NODE_PATH%\npm.cmd install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Installation terminée avec succès !
    echo.
    echo 🚀 Pour démarrer le serveur de développement :
    echo    - Double-cliquez sur dev.bat
    echo    - Ou exécutez : npm run dev
    echo.
    echo 🌐 Le portfolio sera accessible sur : http://localhost:3000
) else (
    echo.
    echo ❌ Erreur lors de l'installation
    echo Vérifiez les logs ci-dessus pour plus de détails.
)

echo.
pause
