import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPropComponent } from './product-prop.component';

describe('ProductPropComponent', () => {
  let component: ProductPropComponent;
  let fixture: ComponentFixture<ProductPropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPropComponent]
    });
    fixture = TestBed.createComponent(ProductPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
