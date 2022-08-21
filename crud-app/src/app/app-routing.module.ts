import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FruitsComponent } from './components/fruits/fruits.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'

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
    path: 'dashboard',
    component: DashboardComponent
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
