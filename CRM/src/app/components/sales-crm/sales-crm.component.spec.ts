import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCRMComponent } from './sales-crm.component';

describe('SalesCRMComponent', () => {
  let component: SalesCRMComponent;
  let fixture: ComponentFixture<SalesCRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesCRMComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
