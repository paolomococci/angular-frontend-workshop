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
