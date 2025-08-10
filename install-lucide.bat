@echo off
echo 🔧 Installation de lucide-react
echo.

REM Chemin vers votre installation Node.js
set NODE_PATH="c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64"

echo 📦 Installation de lucide-react...
%NODE_PATH%\npm.cmd install lucide-react

if %ERRORLEVEL% EQU 0 (
    echo ✅ lucide-react installé avec succès !
    echo.
    echo 🚀 Lancement du serveur de développement...
    %NODE_PATH%\npm.cmd run dev
) else (
    echo ❌ Erreur lors de l'installation de lucide-react
    echo 🔄 Tentative avec --force...
    %NODE_PATH%\npm.cmd install lucide-react --force
    
    if %ERRORLEVEL% EQU 0 (
        echo ✅ lucide-react installé avec --force !
        echo.
        echo 🚀 Lancement du serveur de développement...
        %NODE_PATH%\npm.cmd run dev
    ) else (
        echo ❌ Installation échouée
        echo 💡 Vérifiez votre connexion internet
    )
)

pause
