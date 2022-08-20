import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FruitsComponent } from './components/fruits/fruits.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/fruits',
    pathMatch: 'full'
  },
  {
    path: 'fruits',
    component: FruitsComponent
  },
  {
    path: '**',
    redirectTo: '/fruits',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
