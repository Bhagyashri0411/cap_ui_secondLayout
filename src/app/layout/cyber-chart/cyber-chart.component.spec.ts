import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberChartComponent } from './cyber-chart.component';

describe('CyberChartComponent', () => {
  let component: CyberChartComponent;
  let fixture: ComponentFixture<CyberChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberChartComponent]
    });
    fixture = TestBed.createComponent(CyberChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
