import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'

import { FruitsData } from '../data/fruits-data'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
