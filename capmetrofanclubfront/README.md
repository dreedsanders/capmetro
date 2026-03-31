# Cap Metro Fan Club — Frontend

Create React App (`react-scripts` 4) + React 17. For full-stack local development, read the **[repository README](../README.md)** first.

## Prerequisites

- **Node.js 17.x** recommended (webpack 4 + OpenSSL; scripts use `NODE_OPTIONS=--openssl-legacy-provider`).
- **npm**

## Run the dev server

From this directory:

```bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
nvm use            # uses .nvmrc (17.3.0); run nvm install if missing
npm install
BROWSER=none PORT=3001 npm start
```

- Open [http://localhost:3001](http://localhost:3001).
- Use **port 3001** so the Rails API can own **port 3000**.

Scripts in `package.json`:

- `npm start` — development server (includes OpenSSL legacy provider for webpack).
- `npm run build` — production build (same OpenSSL flag).
- `npm test` — interactive test runner.

---

## Create React App (upstream)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available scripts (reference)

In the project directory you can run:

#### `npm start`

Runs the app in development mode. With `PORT=3001`, open [http://localhost:3001](http://localhost:3001).

#### `npm test`

Launches the test runner in interactive watch mode. See [running tests](https://facebook.github.io/create-react-app/docs/running-tests).

#### `npm run build`

Builds the app for production to the `build` folder.

#### `npm run eject`

**Note: this is a one-way operation.**

## Learn more

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
