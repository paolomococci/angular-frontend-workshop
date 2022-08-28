import { Injectable } from '@angular/core'
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api'

import { Fruit } from 'src/app/models/fruit.model'
import { FruitsData } from '../data/fruits-data'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const fruits: Fruit[] = FruitsData.fruits
    return {fruits}
  }

  generateId(fruits: Fruit[]): number {
    return fruits.length > 0 ? Math.max(
      ...fruits.map(
        fruit => fruit.id
      )
    ) + 45 : 1000
  }

}
