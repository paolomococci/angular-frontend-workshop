# OpenSeeGet (WYSIWYG application)

## scaffolding

```shell
ng new open-see-get --defaults
```

## now I install the following packages

```shell
npm i --legacy-peer-deps ngx-wig
npm i --legacy-peer-deps --save-dev electron
npm i --legacy-peer-deps --save-dev webpack-cli
npm i --legacy-peer-deps --save-dev ts-loader
npm i --legacy-peer-deps --save-dev concurrently
```

I add editor component

```shell
ng g c components/editor
```

I add editor service

```shell
ng g s services/editor
```
