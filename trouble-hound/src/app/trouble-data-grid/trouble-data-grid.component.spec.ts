import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleDataGridComponent } from './trouble-data-grid.component';

describe('TroubleDataGridComponent', () => {
  let component: TroubleDataGridComponent;
  let fixture: ComponentFixture<TroubleDataGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroubleDataGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
