import {
  Component,
  OnInit,
  Input
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

  @Input()
  fruit?: Fruit

  constructor() { }

  ngOnInit(): void {
  }

}
