import {
  Component,
  OnInit
} from '@angular/core'

import { Fruit } from 'src/app/models/fruit.model'
import { FruitsData } from 'src/app/data/fruits-data'

import { FruitService } from 'src/app/services/fruit.service'
import { MessageService } from 'src/app/services/message.service'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.sass']
})
export class FruitsComponent implements OnInit {

  fruit: Fruit = FruitsData.fruits[0]

  fruits: Fruit[] = FruitsData.fruits
  selectedFruit?: Fruit

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(fruit: Fruit): void {
    this.selectedFruit = fruit
  }

}
