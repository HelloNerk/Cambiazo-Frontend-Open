import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOngsCategoriesComponent } from './crud-ongs-categories.component';

describe('CrudOngsCategoriesComponent', () => {
  let component: CrudOngsCategoriesComponent;
  let fixture: ComponentFixture<CrudOngsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOngsCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudOngsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
