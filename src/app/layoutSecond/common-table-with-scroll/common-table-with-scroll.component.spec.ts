import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableWithScrollComponent } from './common-table-with-scroll.component';

describe('CommonTableWithScrollComponent', () => {
  let component: CommonTableWithScrollComponent;
  let fixture: ComponentFixture<CommonTableWithScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTableWithScrollComponent]
    });
    fixture = TestBed.createComponent(CommonTableWithScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
