import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdjustmentTableComponent } from './site-adjustment-table.component';

describe('SiteAdjustmentTableComponent', () => {
  let component: SiteAdjustmentTableComponent;
  let fixture: ComponentFixture<SiteAdjustmentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteAdjustmentTableComponent]
    });
    fixture = TestBed.createComponent(SiteAdjustmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
