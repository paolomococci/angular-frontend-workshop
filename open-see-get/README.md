# OpenSeeGet (WYSIWYG application)

Angular 15.2.1

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

## now I check which versions of package @types/node are available and proceed with the installation of one of them

```shell
npm i --save-dev @types/node@15.6.0
```

## now I proceed with the installation of package electron-packager

```shell
npm i --save-dev electron-packager
```

## finally, I proceed to build the application in production mode

```shell
npm run build:electron
```

## and then I generate the package

```shell
npm run package
```
