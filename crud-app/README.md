# CrudApp

Application developed thanks to the Angular 15.0.1

## scaffolding

```shell
ng n crud-app --routing --skip-install --style=sass
```

## install

```shell
npm install
```

# I add Fruit interface

```shell
ng g i models/Fruit --type=model
```

## I add fruits component

```shell
ng g c components/fruits
```

## I add FruitsData class

```shell
ng g cl data/FruitsData
```

## I add fruit-details component

```shell
ng g c components/fruit-details
```

## I add messages component

```shell
ng g c components/messages
```

## I add message service

```shell
ng g s services/message
```

## I add fruit service

```shell
ng g s services/fruit
```

## I add dashboard component

```shell
ng g c components/dashboard
```

## mimic communication with the backend

At this point, for the sole purpose of development, I have chosen to simulate the connection with a remote server.

### I install angular-in-memory-web-api

```shell
npm i angular-in-memory-web-api
```

## I add data service

```shell
ng g s services/data
```

## I add search component

```shell
ng g c components/search
```

## serve

```shell
ng serve -o
```

## screenshot

![control panel of fruits crud-app](https://github.com/paolomococci/angular-frontend-workshop/blob/main/screenshots/crud-app_screenshot_2022-09-16.png)
