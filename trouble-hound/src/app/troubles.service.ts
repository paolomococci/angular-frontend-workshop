import { Injectable } from '@angular/core';
import { Trouble } from './trouble';

@Injectable({
  providedIn: 'root'
})
export class TroublesService {

  private troubles: Trouble[] = [];

  constructor() { }

  getPendingTroubles() : Trouble[] {
    return this.troubles.filter(trouble => !trouble.closure);
  }
}
