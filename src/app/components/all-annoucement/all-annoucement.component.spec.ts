import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAnnoucementComponent } from './all-annoucement.component';

describe('AllAnnoucementComponent', () => {
  let component: AllAnnoucementComponent;
  let fixture: ComponentFixture<AllAnnoucementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAnnoucementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAnnoucementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
