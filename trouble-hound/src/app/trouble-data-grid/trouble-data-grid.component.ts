import { Component, OnInit } from '@angular/core';
import { TroublesService } from '../troubles.service';
import { Trouble } from '../trouble';

@Component({
  selector: 'app-trouble-data-grid',
  templateUrl: './trouble-data-grid.component.html',
  styleUrls: ['./trouble-data-grid.component.css']
})
export class TroubleDataGridComponent implements OnInit {

  troubles: Trouble[] = [];

  constructor(private troubleService: TroublesService) { }

  ngOnInit(): void {
    this.getTroubles();
  }

  private getTroubles() {
    this.troubles = this.troubleService.getPendingTroubles();
  }

}