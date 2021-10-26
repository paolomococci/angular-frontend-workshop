import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() troubleOrderNumber: number | null = null;

  @Output() confirm = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toConfirm() {
    this.confirm.emit(true);
    this.troubleOrderNumber = null;
  }

  toDisconfirm() {
    this.confirm.emit(false);
    this.troubleOrderNumber = null;
  }

}
