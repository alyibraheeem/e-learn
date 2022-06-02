import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaatComponent } from './chaat.component';

describe('ChaatComponent', () => {
  let component: ChaatComponent;
  let fixture: ComponentFixture<ChaatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
