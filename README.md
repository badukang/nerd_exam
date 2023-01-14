# Getting Started

Instructions on how to start the app

## Prerequisites

this app uses:

-   node 16
-   npm 8
-   php 8
-   mysql 8

### Installation

1. Clone Repo

```
git@github.com:badukang/nerd_exam.git
```
2. Create DB

```
CREATE DATABASE nerd_db
```
3. Update env

-   copy .env.example and rename to .env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nerd_db
DB_USERNAME=root
DB_PASSWORD=12345678
```
4. Install laravel dependencies
```
composer install
```
5. Install npm packages
```
npm install
```
6. Run Migration & Seeder
```
php artisan migrate
php artisan db:seed
```
7. Generate APP key
```
php artisan key:generate
```


### Usage
*run in different terminal*
1. Run local server
```
php artisan serve
```
2. Run frontend dev server *(note: Vite)*
```
npm run dev
```
3. Run websocket server
```
php artisan websockets:serve
```
4. Visit the app
```
http://127.0.0.1:8000
```

### Test Accounts
```
u: admin@test.com
p: 1234
```
```
u: test001@test.com
p: 1234
```
```
u: test002@test.com
p: 1234
```