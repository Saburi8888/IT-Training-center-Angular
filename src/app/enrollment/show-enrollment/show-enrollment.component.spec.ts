import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEnrollmentComponent } from './show-enrollment.component';

describe('ShowEnrollmentComponent', () => {
  let component: ShowEnrollmentComponent;
  let fixture: ComponentFixture<ShowEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowEnrollmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
