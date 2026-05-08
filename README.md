# ArgentBank — Application bancaire

Projet 13 de la formation OpenClassrooms Développeur React.

ArgentBank est une application bancaire qui permet aux utilisateurs de se connecter, de consulter leur profil et leurs comptes, et de modifier leurs informations personnelles. Elle s'appuie sur une API REST sécurisée par JWT et utilise Redux pour la gestion d'état.

---

## Prérequis

- [Node.js](https://nodejs.org/) v12+
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- npm

---

## Installation

### 1. Frontend (ce repo)

```bash
npm install
```

### 2. Backend

Le backend est un dépôt séparé. Clone-le et installe ses dépendances :

```bash
git clone https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API.git
cd Project-10-Bank-API
npm install
```

---

## Configuration

Crée un fichier `.env` à la racine du frontend avec le contenu suivant :

### Variables d'environnement (`.env`)

| Variable              | Description                  | Valeur par défaut              |
|-----------------------|------------------------------|--------------------------------|
| `VITE_API_BASE_URL`   | URL de base de l'API backend | `http://localhost:3001/api/v1` |

---

## Lancer le projet

### 1. Démarrer le backend

```bash
cd Project-10-Bank-API
npm run dev:server
```

Le serveur sera disponible sur [http://localhost:3001](http://localhost:3001).

### 2. Peupler la base de données (première fois uniquement)

```bash
npm run populate-db
```

### 3. Démarrer le frontend

```bash
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

---

## Comptes de test

Une fois la base de données peuplée, deux utilisateurs sont disponibles :

| Prénom | Nom    | Email            | Mot de passe |
|--------|--------|------------------|--------------|
| Tony   | Stark  | tony@stark.com   | password123  |
| Steve  | Rogers | steve@rogers.com | password456  |

---

## Documentation API

La documentation Swagger est accessible une fois le backend démarré :

[http://localhost:3001/api-docs](http://localhost:3001/api-docs)

---

## Structure du projet

```
ArgentBank/
├── public/
└── src/
    ├── assets/                  # Images et icônes
    ├── components/
    │   ├── Account/             # Composant carte de compte bancaire
    │   ├── Features/            # Section des fonctionnalités (page d'accueil)
    │   ├── Footer/              # Pied de page
    │   ├── Hero/                # Bannière principale (page d'accueil)
    │   └── Navbar/              # Barre de navigation
    ├── pages/
    │   ├── HomePage/            # Page d'accueil (/)
    │   ├── SignInPage/          # Page de connexion (/login)
    │   └── UserPage/            # Page profil utilisateur (/profile)
    ├── store/
    │   ├── index.js             # Configuration du store Redux
    │   ├── authActions.js       # Actions asynchrones (login, fetchProfile, updateProfile)
    │   ├── authSlice.js         # Reducer et actions synchrones (logout)
    │   └── authSelectors.js     # Sélecteurs Redux
    ├── index.css                # Styles globaux
    └── main.jsx                 # Point d'entrée React
```

---

## Technologies utilisées

- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/) — gestion d'état
- [React Router v7](https://reactrouter.com/) — routing
- [Vite](https://vitejs.dev/) — bundler
- JWT — authentification via token Bearer
