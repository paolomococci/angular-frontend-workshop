import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { User } from './user'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RetrieverService {

  uri: string = `${environment.apiUrl}/users/${environment.username}`

  constructor(private httpClient: HttpClient) { }

  // method to getting data of user
  getUser(): Observable<User> {
    return this.httpClient.get<User>(
      this.uri
    )
  }
}
