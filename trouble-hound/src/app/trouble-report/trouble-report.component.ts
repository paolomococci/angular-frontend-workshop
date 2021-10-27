import { TroublesService } from './../troubles.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trouble } from '../trouble';

@Component({
  selector: 'app-trouble-report',
  templateUrl: './trouble-report.component.html',
  styleUrls: ['./trouble-report.component.css']
})
export class TroubleReportComponent implements OnInit {

  @Output() formClose = new EventEmitter();
  troubleFormGroup: FormGroup | undefined;
  tips: Trouble[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private troublesService: TroublesService
  ) { }

  ngOnInit(): void {
    this.troubleFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required],
      opening: new Date
    });
    this.troubleFormGroup.controls.title.valueChanges.subscribe(
      (title: string) => {
        this.tips = this.troublesService.getTips(title);
      }
    );
  }

  createNewPendingTrouble() {
    if (this.troubleFormGroup && this.troubleFormGroup.invalid) {
      this.troubleFormGroup.markAllAsTouched();
    }
    this.troublesService.createPendingTrouble(this.troubleFormGroup?.value);
    this.formClose.emit();
  }
}
