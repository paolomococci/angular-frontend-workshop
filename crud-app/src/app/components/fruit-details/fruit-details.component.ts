import {
  Component,
  OnInit
} from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

import { Fruit } from 'src/app/models/fruit.model'
import { FruitService } from 'src/app/services/fruit.service'

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.sass']
})
export class FruitDetailsComponent implements OnInit {

  fruit: Fruit | undefined

  constructor(
    private activateRoute: ActivatedRoute,
    private fruitService: FruitService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.read()
  }

  read(): void {
    const id = parseInt(
      this.activateRoute.snapshot.paramMap.get('id')!
    )
    this.fruitService
      .read(id)
      .subscribe(
        fruit => this.fruit = fruit
      )
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    if (this.fruit) {
      this.fruitService
        .update(this.fruit)
        .subscribe(
          () => this.goBack()
        )
    }
  }

}
