import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'

import { Fruit } from 'src/app/models/fruit.model'
import { FruitsData } from '../data/fruits-data'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  fruits: Fruit[] = FruitsData.fruits

  constructor() { }

  createDb() {
    return this.fruits
  }

  generateId(): number {
    return 0
  }

}
