# Cap Metro Fan Club — Rails API

Rails `6.1.x` API. Ruby version is pinned in `.ruby-version` and `Gemfile` (currently **2.6.10**).

## Run the server (development)

From this directory:

```bash
source ~/.rvm/scripts/rvm   # if using RVM
rvm use 2.6.10
bundle install
bundle exec rails server -b 127.0.0.1 -p 3000
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Database

PostgreSQL is required. Configure `config/database.yml`, then:

```bash
bundle exec rails db:create db:migrate
```

## App server

Development uses **WEBrick** (see comments in `Gemfile`). Puma is optional; uncomment the `puma` gem and run `bundle install` when your Ruby/OpenSSL toolchain can build the native extension.

## Tests

```bash
bundle exec rails test
```

See the repository [README](../README.md) for how to run the React frontend alongside this API.
