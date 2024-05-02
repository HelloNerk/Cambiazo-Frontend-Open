import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProductCategoriesComponent } from './crud-product-categories.component';

describe('CrudProductCategoriesComponent', () => {
  let component: CrudProductCategoriesComponent;
  let fixture: ComponentFixture<CrudProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudProductCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
