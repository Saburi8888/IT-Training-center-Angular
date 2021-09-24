import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEnrollmentComponent } from './add-edit-enrollment.component';

describe('AddEditEnrollmentComponent', () => {
  let component: AddEditEnrollmentComponent;
  let fixture: ComponentFixture<AddEditEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
