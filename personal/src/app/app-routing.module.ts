import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  //{path: '', pathMatch: 'full', redirectTo: 'articles'},
  //{path: '**', redirectTo: 'articles'},
  { path: 'contact', component: ContactComponent },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
