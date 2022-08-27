import {
  Component,
  OnInit
} from '@angular/core'

import {
  Observable,
  Subject
} from 'rxjs'

import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators'

import { Fruit } from 'src/app/models/fruit.model'
import { FruitService } from 'src/app/services/fruit.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
