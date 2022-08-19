import {
  Component,
  OnInit,
  Input
} from '@angular/core'

import { Fruit } from 'src/app/models/fruit.model'

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.component.html',
  styleUrls: ['./fruit-details.component.sass']
})
export class FruitDetailsComponent implements OnInit {

  @Input()
  fruit?: Fruit

  constructor() { }

  ngOnInit(): void {
  }

}
