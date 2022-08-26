import {
  Component,
  OnInit
} from '@angular/core'

import { Fruit } from 'src/app/models/fruit.model'
import { FruitService } from 'src/app/services/fruit.service'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.sass']
})
export class FruitsComponent implements OnInit {

  fruits: Fruit[] = []

  constructor(
    private fruitService: FruitService
  ) { }

  ngOnInit(): void {
    this.getFruits()
  }

  getFruits(): void {
    this.fruitService.getFruits()
      .subscribe(
        fruits => this.fruits = fruits
      )
  }

  create(): void {}

  delete(): void {}

}
