import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProductCategoriesComponent } from './dialog-product-categories.component';

describe('DialogProductCategoriesComponent', () => {
  let component: DialogProductCategoriesComponent;
  let fixture: ComponentFixture<DialogProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogProductCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
