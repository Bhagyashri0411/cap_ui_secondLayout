import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableStructureComponent } from './common-table-structure.component';

describe('CommonTableStructureComponent', () => {
  let component: CommonTableStructureComponent;
  let fixture: ComponentFixture<CommonTableStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonTableStructureComponent]
    });
    fixture = TestBed.createComponent(CommonTableStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
