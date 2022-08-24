import { Injectable } from '@angular/core'

import {
  Observable,
  of
} from 'rxjs'
import {
  catchError,
  map,
  tap
} from 'rxjs/operators'

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http'

import { Fruit } from '../models/fruit.model'
import { FruitsData } from '../data/fruits-data'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private fruitsBaseUrl: string = 'api/fruits'

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`FruitService: ${message}`)
  }

  private handleError<T>(
    operation = 'operation', result?: T
  ) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(
        `${operation} failed: ${error.message}`
      )
      return of(result as T)
    }
  }

  getFruit(id: number): Observable<Fruit> {
    const fruit = FruitsData.fruits.find(
      temp => temp.id === id
    )!
    this.messageService.add(
      `retrieved fruit id: ${id}`
    )
    return of(fruit)
  }

  getFruits(): Observable<Fruit[]> {
    const fruits = of(FruitsData.fruits)
    this.messageService.add('retrieved the identifiers of the following fruits:')
    return fruits
  }

  getFruitById(): void {}

  getFruitsThanksToHttpClient(): Observable<Fruit[]> {
    return this.httpClient
      .get<Fruit[]>(
        this.fruitsBaseUrl
      ).pipe(
        tap(
          _ => this.log('retrieved fruits')
        ),
        catchError(
          this.handleError<Fruit[]>(
            'getFruitsThanksToHttpClient',
            []
          )
        )
      )
  }

}
