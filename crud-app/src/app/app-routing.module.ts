import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FruitsComponent } from './components/fruits/fruits.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: FruitDetailsComponent
  },
  {
    path: 'fruits',
    component: FruitsComponent
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
