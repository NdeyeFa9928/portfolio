# 🔧 Guide de Dépannage

## ❌ Problème : Erreurs rouges dans TypeScript/Tailwind

### Causes possibles :
1. **Dépendances non installées** - Les modules npm ne sont pas installés
2. **Problèmes d'installation npm** - Conflits ou erreurs de réseau
3. **Configuration TypeScript** - Types manquants

### Solutions :

#### 🎯 **Solution 1 : Installation manuelle des dépendances**

```bash
# Supprimez le dossier node_modules s'il existe
rmdir /s node_modules

# Supprimez package-lock.json s'il existe
del package-lock.json

# Réinstallez avec votre Node.js local
powershell -Command "& 'c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64\npm.cmd' install --force"
```

#### 🎯 **Solution 2 : Installation globale de Node.js**

1. Téléchargez Node.js depuis https://nodejs.org/
2. Installez-le globalement sur votre système
3. Redémarrez votre éditeur de code
4. Exécutez : `npm install`

#### 🎯 **Solution 3 : Mode développement simple**

En attendant que les dépendances se résolvent :

```bash
# Ouvrez le portfolio de test
.\start-simple.bat

# Ou directement
start test.html
```

## 🔍 **Diagnostic des erreurs**

### Erreurs TypeScript courantes :

1. **"Cannot find module 'framer-motion'"**
   - ✅ Solution : Installer les dépendances npm
   - 🔄 Temporaire : Utiliser `HeroSection-simple.tsx`

2. **"Cannot find module 'tailwindcss'"**
   - ✅ Solution : `npm install tailwindcss`
   - 🔄 Temporaire : Utiliser le fichier `test.html`

3. **"JSX element implicitly has type 'any'"**
   - ✅ Solution : Installer `@types/react`
   - 🔄 Temporaire : Types définis dans `src/types/globals.d.ts`

## 🛠️ **Commandes de diagnostic**

```bash
# Vérifier la version de Node.js
"c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64\node.exe" --version

# Vérifier la version de npm
"c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64\npm.cmd" --version

# Vérifier les dépendances installées
"c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64\npm.cmd" list

# Nettoyer le cache npm
"c:\users\MBOWN1\OneDrive - Colas\Desktop\perso\node-v22.18.0-win-x64\npm.cmd" cache clean --force
```

## 🚀 **Alternatives de développement**

### Option 1 : Portfolio statique (test.html)
- ✅ Fonctionne immédiatement
- ✅ Montre l'architecture et le design
- ❌ Pas d'interactivité complète

### Option 2 : Composants simplifiés
- ✅ Structure Next.js conservée
- ✅ Pas de dépendances externes
- ❌ Animations limitées

### Option 3 : Installation complète
- ✅ Toutes les fonctionnalités
- ✅ Animations Framer Motion
- ❌ Nécessite résolution des problèmes npm

## 📞 **Support**

Si les problèmes persistent :

1. **Vérifiez les logs d'erreur** dans le terminal
2. **Essayez une installation Node.js globale**
3. **Utilisez le mode simple** en attendant
4. **Consultez la documentation Next.js** : https://nextjs.org/docs

## ✅ **Checklist de vérification**

- [ ] Node.js fonctionne (`node --version`)
- [ ] npm fonctionne (`npm --version`)
- [ ] Dossier `node_modules` existe
- [ ] Fichier `package-lock.json` créé
- [ ] Aucune erreur dans `npm install`
- [ ] TypeScript reconnaît les modules
- [ ] Tailwind CSS fonctionne

Une fois toutes ces étapes validées, le portfolio devrait fonctionner parfaitement ! 🎉
