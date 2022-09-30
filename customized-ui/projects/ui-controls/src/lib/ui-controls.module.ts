import { NgModule } from '@angular/core'
import { UiControlsComponent } from './ui-controls.component'
import { CardListComponent } from './card-list/card-list.component'



@NgModule({
  declarations: [
    UiControlsComponent,
    CardListComponent
  ],
  imports: [
  ],
  exports: [
    UiControlsComponent,
    CardListComponent
  ]
})
export class UiControlsModule { }
