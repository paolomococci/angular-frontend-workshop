# BlogInitial

## scaffolding

```text
ng new blog-initial --routing=true --style=scss
cd blog-initial
npm install bootstrap
ng generate module core
ng generate component header --path=src/app/core --module=core --export
ng generate module shared
ng generate component footer --path=src/app/shared --module=shared --export
ng generate module contact
ng generate component contact --path=src/app/contact --module=contact --export --flat
ng generate module articles --route=articles --module=app-routing
```
