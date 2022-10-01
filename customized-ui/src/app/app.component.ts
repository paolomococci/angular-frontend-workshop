import { Component } from '@angular/core'

import { Card } from 'ui-controls'
import { SampleData } from './data/sample-data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'customized-ui'

  cards: Card[] = SampleData.cards

  onCardChange(cards: Card[]) {
    console.log(cards)
  }

  log() {}
}
