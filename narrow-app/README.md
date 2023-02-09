# NarrowApp

Angular 15.1.4

An example of a web application of type SSR, (Server-Side Rendering).

## scaffolding

```shell
ng new narrow-app --routing=false --skip-install --style=sass
```

## install

```shell
npm install
```

## install Bootstrap

```shell
npm i bootstrap
npm i bootstrap-icons
```

### edit src/styles.sass

```text
@import "node_modules/bootstrap/scss/bootstrap"
@import "node_modules/bootstrap-icons/font/bootstrap-icons"
```

## create retriever service

```shell
ng g s retriever
```

## create personal-info component

```shell
ng g c personal-info
```

## create user interface

```shell
ng g i user
```

## here is a command to get information about your user on GitHub

```shell
curl -X GET -u username:token https://api.github.com/users/username
```

Of course you need a really existing username and a valid token.

## run application in development mode

```shell
ng serve -o
```
