import { Injectable } from '@angular/core'
import {
  Observable,
  of
} from 'rxjs'

import { Fruit } from '../models/fruit.model'
import { FruitsData } from '../data/fruits-data'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private messageService: MessageService) { }

  getFruit(id: number): Observable<Fruit> {
    const fruit = FruitsData.fruits.find(
      temp => temp.id === id
    )
    this.messageService.add(
      `retrieved fruit id: ${id}`
    )
  }

  getFruits(): Observable<Fruit[]> {
    const fruits = of(FruitsData.fruits)
    this.messageService.add('retrieved the identifiers of the following fruits:')
    return fruits
  }
}
