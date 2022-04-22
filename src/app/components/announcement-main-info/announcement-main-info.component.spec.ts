import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementMainInfoComponent } from './announcement-main-info.component';

describe('AnnouncementMainInfoComponent', () => {
  let component: AnnouncementMainInfoComponent;
  let fixture: ComponentFixture<AnnouncementMainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementMainInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
