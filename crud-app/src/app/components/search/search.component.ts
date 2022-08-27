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

  private searchTerms = new Subject<string>()

  fruits$!: Observable<Fruit[]>

  constructor(
    private fruitService: FruitService
  ) { }

  ngOnInit(): void {
    this.fruits$ = this.searchTerms
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(
          (term: string) => this.fruitService.search(term)
        ),
      )
  }

  search(term: string): void {
    this.searchTerms.next(term)
  }

}
