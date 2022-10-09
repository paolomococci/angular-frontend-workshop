import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

import { User } from './user'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RetrieverService {

  uri: string = `${environment.apiUrl}/users/${environment.username}`

  // TODO
  headers: HttpHeaders = new HttpHeaders()
    .set('', ``)

  // TODO
  params: HttpParams = new HttpParams()
    .set('username', environment.username)
    .set('token', ``)

  // TODO
  options: {} | undefined

  constructor(private httpClient: HttpClient) { }

  // method to getting data of user
  getUser(): Observable<User> {
    return this.httpClient.get<User>(
      this.uri,
      this.options
    )
  }
}
