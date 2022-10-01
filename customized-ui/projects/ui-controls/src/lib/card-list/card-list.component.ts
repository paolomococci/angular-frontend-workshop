import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter
} from '@angular/core'
import {
  CdkDragDrop,
  moveItemInArray
} from '@angular/cdk/drag-drop'

import { Card } from '../card'

@Component({
  selector: 'lib-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  @Input() cards: Card[] = []

  @Output() cardChange = new EventEmitter<Card[]>()

  constructor() { }

  ngOnInit(): void {
  }

  sortCards(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.cards,
      event.previousIndex,
      event.currentIndex
    )
    this.cardChange.emit(this.cards)
  }

}
