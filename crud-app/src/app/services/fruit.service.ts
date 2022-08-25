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

  httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  }

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

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) { }

  /* to be removed */
  getFruit(id: number): Observable<Fruit> {
    const fruit = FruitsData.fruits.find(
      temp => temp.id === id
    )!
    this.messageService.add(
      `retrieved fruit id: ${id}`
    )
    return of(fruit)
  }

  /* to be removed */
  getFruits(): Observable<Fruit[]> {
    const fruits = of(FruitsData.fruits)
    this.messageService.add('retrieved the identifiers of the following fruits:')
    return fruits
  }

  /* POST HTTP method */
  create(fruit: Fruit): Observable<Fruit> {
    return this.httpClient.post<Fruit>(
      this.fruitsBaseUrl,
      fruit,
      this.httpOptions
    )
      .pipe(
        tap((newFruit: Fruit) => this.log(
          `create new fruit id=${newFruit.id}`
        )),
        catchError(this.handleError<Fruit>('create'))
      )
  }


  /* GET HTTP method */
  readError404<Data>(id: number): Observable<Fruit> {
    const url = `${this.fruitsBaseUrl}/?id=${id}`
    return this.httpClient
      .get<Fruit[]>(url)
      .pipe(
        map(fruits => fruits[0]),
        tap(temp => {
          const outcome = temp ? 'retrieved' : 'not found'
          this.log(`${outcome} fruit id=${id}`)
        }),
        catchError(this.handleError<Fruit>(`read id=${id}`))
      )
  }

  /* GET HTTP method */
  read(id: number): Observable<Fruit> {
    const url = `${this.fruitsBaseUrl}/${id}`
    return this.httpClient
      .get<Fruit>(url)
      .pipe(
        tap(_ => this.log(`retrieved fruit by id=${id}`)),
        catchError(this.handleError<Fruit>(`read id=${id}`))
      )
  }

  /* GET HTTP method */
  readAll(): Observable<Fruit[]> {
    return this.httpClient
      .get<Fruit[]>(
        this.fruitsBaseUrl
      ).pipe(
        tap(
          _ => this.log('retrieved fruits')
        ),
        catchError(
          this.handleError<Fruit[]>(
            'readAll',
            []
          )
        )
      )
  }

  /* PUT HTTP method */
  update(fruit: Fruit): Observable<any> {
    return this.httpClient
      .put(
        this.fruitsBaseUrl,
        fruit,
        this.httpOptions
      )
      .pipe(
        tap(_ => this.log(`updated fruit id=${fruit.id}`)),
        catchError(this.handleError<any>('update'))
      )
  }

  /* DELETE HTTP method */
  delete(id: number): Observable<Fruit> {
    const url = `${this.fruitsBaseUrl}/${id}`
    return this.httpClient
      .delete<Fruit>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted fruit id=${id}`)),
        catchError(this.handleError<Fruit>('delete'))
      )
  }

  /* GET HTTP method */
  search(temp: string): Observable<Fruit[]> {
    if (!temp.trim()) {
      return of([])
    } else {
      return this.httpClient
        .get<Fruit[]>(`${this.fruitsBaseUrl}/?name=${temp}`)
        .pipe(
          tap(
            fruits => fruits.length ?
            this.log(`found fruits matching "${temp}"`) :
            this.log(`no fruits matching "${temp}"`)
          ),
          catchError(this.handleError<Fruit[]>('search', []))
        )
    }
  }

}
