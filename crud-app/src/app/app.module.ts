import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { FruitsComponent } from './components/fruits/fruits.component'
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component'

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
