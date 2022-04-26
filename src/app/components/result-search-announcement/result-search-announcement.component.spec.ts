import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchAnnouncementComponent } from './result-search-announcement.component';

describe('ResultSearchAnnouncementComponent', () => {
  let component: ResultSearchAnnouncementComponent;
  let fixture: ComponentFixture<ResultSearchAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSearchAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
