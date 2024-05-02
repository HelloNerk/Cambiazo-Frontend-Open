import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCategoriesAdminComponent } from './products-categories-admin.component';

describe('ProductsCategoriesAdminComponent', () => {
  let component: ProductsCategoriesAdminComponent;
  let fixture: ComponentFixture<ProductsCategoriesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsCategoriesAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsCategoriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
