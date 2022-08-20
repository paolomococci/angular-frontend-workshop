import {
  Component,
  OnInit
} from '@angular/core'

import { Fruit } from 'src/app/models/fruit.model'

import { FruitService } from 'src/app/services/fruit.service'
import { MessageService } from 'src/app/services/message.service'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.sass']
})
export class FruitsComponent implements OnInit {

  fruits: Fruit[] = []

  selectedFruit?: Fruit

  constructor(
    private fruitService: FruitService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getFruits()
  }

  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit
    this.messageService.add('selected fruit id=$(fruit.id)')
  }

  getFruits(): void {
    this.fruitService.getFruits()
      .subscribe(
        fruits => this.fruits = fruits
      )
  }

}
