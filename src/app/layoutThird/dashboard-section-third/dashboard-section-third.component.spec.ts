import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSectionThirdComponent } from './dashboard-section-third.component';

describe('DashboardSectionThirdComponent', () => {
  let component: DashboardSectionThirdComponent;
  let fixture: ComponentFixture<DashboardSectionThirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardSectionThirdComponent]
    });
    fixture = TestBed.createComponent(DashboardSectionThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
