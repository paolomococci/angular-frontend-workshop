import {
  Injector,
  NgModule
} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'

import { createCustomElement } from '@angular/elements'
import {
  UiControlsModule,
  CopyButtonComponent
} from 'ui-controls'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiControlsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
