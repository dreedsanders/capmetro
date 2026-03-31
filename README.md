# Cap Metro Fan Club

## Where this project lives

The repository **lives under your personal folder**:

`/Users/donovansanders/personal/CapMetroFanClub`

`~/CapMetroFanClub` is a **symlink** to that directory, so opening either path in Cursor (or the terminal) shows the same files. To work only from `personal`, open the folder `personal/CapMetroFanClub` as your workspace.

Monorepo layout:

| Directory | Stack |
|-----------|--------|
| `CapMetroFanClub/` | Rails 6 API (Ruby 2.6.10) |
| `capmetrofanclubfront/` | React 17 (Create React App 4) |

## Prerequisites

- **Ruby** `2.6.10` (see `CapMetroFanClub/.ruby-version`). [RVM](https://rvm.io/) or rbenv recommended.
- **Bundler** (installed with Ruby gems).
- **PostgreSQL** running locally, with credentials matching `CapMetroFanClub/config/database.yml`.
- **Node.js** `17.x` (this project uses webpack 4; Node 17+ works with the OpenSSL legacy provider set in `package.json` scripts). [nvm](https://github.com/nvm-sh/nvm) recommended.
- **npm** (comes with Node).

## Starting the app (development)

Start the **backend first**, then the **frontend** (so the API is up if the UI calls it). Both default to different ports so they can run together.

### 1. Backend (Rails)

```bash
cd CapMetroFanClub
source ~/.rvm/scripts/rvm   # if you use RVM
rvm use 2.6.10
bundle install
bundle exec rails server -b 127.0.0.1 -p 3000
```

- **URL:** [http://127.0.0.1:3000](http://127.0.0.1:3000)
- The app uses **WEBrick** in development (see `Gemfile` comments). To use **Puma** instead, uncomment the `puma` gem, run `bundle install`, and ensure Puma can compile against your OpenSSL setup.

Database setup (first time or after cloning):

```bash
cd CapMetroFanClub
bundle exec rails db:create db:migrate
```

### 2. Frontend (React)

Use a **separate terminal**. The dev server is configured to use **port 3001** so it does not conflict with Rails on 3000.

```bash
cd capmetrofanclubfront
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
nvm use            # reads .nvmrc (Node 17.3.0); install with nvm install if needed
npm install
BROWSER=none PORT=3001 npm start
```

- **URL:** [http://localhost:3001](http://localhost:3001)
- `npm start` and `npm run build` set `NODE_OPTIONS=--openssl-legacy-provider` for compatibility with webpack 4 on modern Node/OpenSSL.
- Omit `BROWSER=none` if you want the browser to open automatically.

### Port summary

| Service | Port |
|---------|------|
| Rails | 3000 |
| React (dev) | 3001 (when `PORT=3001` is set) |

## Project-specific notes

- **Frontend dependency overrides** are in `capmetrofanclubfront/package.json` (`overrides` for PostCSS) so Create React App 4 installs cleanly with current npm.
- **API keys** must not be committed; load secrets from environment or `.env` files that are gitignored.

## More detail

- Backend: [CapMetroFanClub/README.md](CapMetroFanClub/README.md)
- Frontend: [capmetrofanclubfront/README.md](capmetrofanclubfront/README.md)
