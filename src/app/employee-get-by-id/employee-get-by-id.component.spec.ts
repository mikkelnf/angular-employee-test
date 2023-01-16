import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeGetByIdComponent } from './employee-get-by-id.component';

describe('EmployeeGetByIdComponent', () => {
  let component: EmployeeGetByIdComponent;
  let fixture: ComponentFixture<EmployeeGetByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeGetByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
