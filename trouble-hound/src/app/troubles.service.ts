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

  createPendingTrouble(trouble: Trouble) {
    trouble.troubleOrderNumber = this.troubles.length + 1;
    this.troubles.push(trouble);
  }

  closeTrouble(trouble: Trouble) {
    const selectedTrouble: Trouble = {
      ...trouble,
      closure: new Date()
    };

    const index = this.troubles.findIndex(i => i === trouble);
    this.troubles[index] = selectedTrouble;
  }

}
