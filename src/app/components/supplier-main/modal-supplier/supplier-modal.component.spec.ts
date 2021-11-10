import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierModal } from './supplier-modal.component';

describe('CrearProductoComponent', () => {
  let component: SupplierModal;
  let fixture: ComponentFixture<SupplierModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierModal ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
