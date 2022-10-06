import {
  Component,
  OnInit
} from '@angular/core'
import { Observable } from 'rxjs'

import { RetrieverService } from '../retriever.service'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.sass']
})
export class PersonalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
