import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAnnouncementComponent } from './reservation-announcement.component';

describe('ReservationAnnouncementComponent', () => {
  let component: ReservationAnnouncementComponent;
  let fixture: ComponentFixture<ReservationAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
