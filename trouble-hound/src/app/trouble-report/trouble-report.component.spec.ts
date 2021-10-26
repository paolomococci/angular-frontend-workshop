import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleReportComponent } from './trouble-report.component';

describe('TroubleReportComponent', () => {
  let component: TroubleReportComponent;
  let fixture: ComponentFixture<TroubleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
