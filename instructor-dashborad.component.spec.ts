import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorDashboradComponent } from './instructor-dashborad.component';

describe('InstructorDashboradComponent', () => {
  let component: InstructorDashboradComponent;
  let fixture: ComponentFixture<InstructorDashboradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorDashboradComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorDashboradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
