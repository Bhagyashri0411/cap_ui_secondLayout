import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordFifthComponent } from './dashbaord-fifth.component';

describe('DashbaordFifthComponent', () => {
  let component: DashbaordFifthComponent;
  let fixture: ComponentFixture<DashbaordFifthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashbaordFifthComponent]
    });
    fixture = TestBed.createComponent(DashbaordFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
