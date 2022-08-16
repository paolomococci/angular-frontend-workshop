import {
  Component,
  OnInit
} from '@angular/core'
import { Fruit } from 'src/app/models/fruit.model'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.sass']
})
export class FruitsComponent implements OnInit {

  fruit: Fruit = {id: 1, name: 'apple'}

  constructor() { }

  ngOnInit(): void {
  }

}
