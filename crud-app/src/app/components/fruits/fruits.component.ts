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
    this.readAll()
  }

  readAll(): void {
    this.fruitService.readAll()
      .subscribe(
        fruits => this.fruits = fruits
      )
  }

  create(name: string): void {
    name = name.trim()
    if (!name) {
      return
    } else {
      this.fruitService.create(
        { name } as Fruit
      ).subscribe(
        fruit => {
          this.fruits.push(fruit)
        }
      )
    }
  }

  delete(fruit: Fruit): void {}

}
