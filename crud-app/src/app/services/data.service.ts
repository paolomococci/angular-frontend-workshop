import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'
import { Observable } from 'rxjs'

import { FruitsData } from '../data/fruits-data'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb(): {} | Observable<{}> | Promise<{}> {
    throw new Error('Method not implemented.')
  }

  generateId(): number {
    return 0
  }

}
