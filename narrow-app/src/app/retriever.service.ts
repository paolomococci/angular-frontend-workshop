import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { User } from './user'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RetrieverService {

  constructor(private httpClient: HttpClient) { }

  // method to getting data of user
  // format: `${environment.apiUrl}/users/${environment.username}`
  getUser(): Observable<User> {
    return this.httpClient.get<User>(
      `${environment.apiUrl}/users/${environment.username}`
    )
  }
}
