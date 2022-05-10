import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementUserComponent } from './announcement-user.component';

describe('AnnouncementUserComponent', () => {
  let component: AnnouncementUserComponent;
  let fixture: ComponentFixture<AnnouncementUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
