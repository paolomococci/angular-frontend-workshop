# OpenSeeGet (WYSIWYG application)

## scaffolding

```shell
ng new open-see-get --defaults
```

## now I install the following packages

```shell
npm i ngx-wig
npm i --save-dev electron
npm i --save-dev webpack-cli
npm i --save-dev ts-loader
npm i --save-dev concurrently
```

or, if you already have a suitably updated x file:

```shell
npm install
```

I add editor component

```shell
ng g c components/editor
```

I add editor service

```shell
ng g s services/editor
```

## and here's how to run this desktop application in development mode

```shell
npm run start:desktop
```
