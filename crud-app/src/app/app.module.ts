import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { DataService } from './services/data.service'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { FruitsComponent } from './components/fruits/fruits.component'
import { FruitDetailsComponent } from './components/fruit-details/fruit-details.component'
import { MessagesComponent } from './components/messages/messages.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SearchComponent } from './components/search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    FruitDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      DataService,
      {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
