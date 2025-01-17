#  Laravel-Vue SPA Coding Challenge

## References
- Laravel Sail: https://laravel.com/docs/8.x/sail
- Forked From: https://github.com/cretueusebiu/laravel-vue-spa

## Features
- Laravel 8
- Vue + VueRouter + Vuex + VueI18n + ESlint
- Pages with dynamic import and custom layouts
- Login, register, email verification, and password reset
- Authentication with JWT
- Bootstrap 5 + Font Awesome 5
- Laravel Sail integration

## Objective

Create a note-taking app and rate estimator using Laravel, VueJS, and MySQL.

## Insructions

You will use a pre-configured application to create a CRUD application. Laravel is used on the back end, and Vuejs is used on the front end as a SPA.

_Note: There is already JWT authentication implemented for the app._


### Part 1: Note Taking App
The application should allow you to create, edit, and delete notes. Users will save notes to the database. Notes will have a title, content, and created_at displayed on the front end.
1.  Save the created notes in the database
2.  Create the necessary table with Laravel migrations
3.  Create all required restful routes to achieve the CRUD functionality
4.  Create required Front End components to access the API you created
5.  Authenticated user needs to be able to view their notes, create new notes, edit existing notes, and delete notes.
6.  Create PHPUnit tests for the new feature

_Users can only view and modify the notes they have created._

### Part 2: Shipment Rate API
The application should allow users to get rate estimates from Stallion for US shipments.
- Documentation: https://stallionexpress.redoc.ly
- Environment URL: https://sandbox.stallionexpress.ca/api/v3
- Bearer Token: {sent via email}

1.  Create a page where a user can fill out a form to get rates for the United States using the Stallion API
2.  Display these rates to the user showing the cost information

_Properly store the bearer token._

### Submission
Create a pull request on Github. Name the branch as {firstname}-{lastname}-submission.

## Grading Scheme

- Functionality: Out of 10
- UX/Design: Out of 10
- DB Design: Out of 5
- Validation: Out of 10
- Coding Style: Out of 10
- Testing: Out of 5

Include front-end and back-end validation. Include testing for the back-end. Feel free to use your creativity and design skills to make the existing site design your own.

## Installation

***Copy ENV***
```
cp .env.example .env
```
***Use Docker container containing PHP and Composer to install the application's dependencies***
https://laravel.com/docs/8.x/sail#installing-composer-dependencies-for-existing-projects

Linux/macOS
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
View the app at http://localhost:3000

#### Production

```bash
./vendor/bin/sail npm run build
```

## Testing

```bash
# Run unit and feature tests
./vendor/bin/sail test



