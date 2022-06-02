import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWeeksComponent } from './view-weeks.component';

describe('ViewWeeksComponent', () => {
  let component: ViewWeeksComponent;
  let fixture: ComponentFixture<ViewWeeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWeeksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWeeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
