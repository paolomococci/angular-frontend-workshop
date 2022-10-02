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

## I add SampleData class

```shell
ng g cl data/SampleData
```

## I generate copy-button component

```shell
ng g c copy-button --project=ui-controls --export
```

## I build ui-controls

```shell
ng build ui-controls
```

## and now I start the application for the first time

```shell
ng serve -o
```

## now, I create a new Angular application named ui-sample

```shell
ng g app ui-sample --routing --style=sass --skip-install --skip-tests
```

## I install the Angular Elements package

```shell
ng add @angular/elements --project=ui-sample
```

## I install the ngx-build-plus package

```shell
ng add ngx-build-plus --project=ui-sample
```
