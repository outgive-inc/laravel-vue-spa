#  Laravel-Vue SPA Coding Challenge

## References
- Laravel Sail: https://laravel.com/docs/8.x/sail
- Forked From: https://github.com/cretueusebiu/laravel-vue-spa

## Features
- Laravel 8
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register, email verification and password reset
- Authentication with JWT
- Bootstrap 5 + Font Awesome 5
- Laravel Sail integration

***Copy ENV***
```
cp .env.example .env
```
***Use Docker container containing PHP and Composer to install the application's dependencies***
https://laravel.com/docs/8.x/sail#installing-composer-dependencies-for-existing-projects

Linux/MacOS
```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

***Run Sail***
```
./vendor/bin/sail up
```

***Setup Application Keys***
```
./vendor/bin/sail artisan key:generate 
./vendor/bin/sail artisan jwt:secret
```

***Run Migrations***
```
./vendor/bin/sail artisan migrate 
```

***Install Node Dependencies***
```
./vendor/bin/sail npm install
```

## Usage

#### Development

```bash
./vendor/bin/sail npm run watch
```
View app at: http://localhost:3000

#### Production

```bash
./vendor/bin/sail npm run build
```

## Testing

```bash
# Run unit and feature tests
./vendor/bin/sail test
