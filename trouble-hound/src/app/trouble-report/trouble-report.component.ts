import { TroublesService } from './../troubles.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trouble-report',
  templateUrl: './trouble-report.component.html',
  styleUrls: ['./trouble-report.component.css']
})
export class TroubleReportComponent implements OnInit {

  @Output() formClose = new EventEmitter();
  troubleFormGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private troublesService: TroublesService
  ) { }

  ngOnInit(): void {
    this.troubleFormGroup = this.formBuilder.group({
      title: [''],
      description: [''],
      priority: [''],
      type: ['']
    });
  }

  createNewPendingTrouble() {
    this.troublesService.createPendingTrouble(this.troubleFormGroup?.value);
    this.formClose.emit();
  }
}
