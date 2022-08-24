# CrudApp

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

## serve

```shell
ng serve -o
```
