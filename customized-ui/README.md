# CustomizedUi

## scaffolding

```shell
ng new customized-ui --routing --skip-install --style=sass
cd customized-ui
ng g library ui-controls
```

## I remove the newly installed packages

```shell
rm --recursive node_modules && rm package-lock.json
```

## I update the dependencies to the latest version and proceed with the installation

```shell
npm install
```

## now I proceed to install package Angular CDK

```shell
npm i @angular/cdk
```

## and now it's the turn of package bulma, a modern CSS framework

```shell
npm i bulma
```

### I edited file angular.json after the two occurrences "styles"

```text
...
            "styles": [
              "src/styles.sass"'
              "./node_modules/bulma/css/bulma.css"
            ],
...
```

## I generate card-list component

```shell
ng g c card-list --project=ui-controls --export
```

## I generate card interface

```shell
ng g i card --project=ui-controls
```

## I build ui-controls

```shell
ng build ui-controls
```

## I add SampleData class

```shell
ng g cl data/SampleData
```

## and now I start the application for the first time

```shell
ng serve -o
```
