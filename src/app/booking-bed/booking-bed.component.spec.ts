import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBedComponent } from './booking-bed.component';

describe('BookingBedComponent', () => {
  let component: BookingBedComponent;
  let fixture: ComponentFixture<BookingBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
