import {
  Component,
  OnInit
} from '@angular/core'
import { Observable } from 'rxjs'

import { RetrieverService } from '../retriever.service'
import { User } from '../user'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.sass']
})
export class PersonalInfoComponent implements OnInit {

  user$: Observable<User> | undefined

  constructor(private retrieverService: RetrieverService) { }

  ngOnInit(): void {
    this.user$ = this.retrieverService.getUser()
  }

}
