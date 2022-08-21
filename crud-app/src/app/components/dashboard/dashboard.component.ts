import {
  Component,
  OnInit
} from '@angular/core'

import { Fruit } from 'src/app/models/fruit.model'
import { FruitService } from 'src/app/services/fruit.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  fruits: Fruit[] = []

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
  }

  getFruits(): void {}

}
