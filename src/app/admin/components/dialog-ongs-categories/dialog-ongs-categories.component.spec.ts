import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOngsCategoriesComponent } from './dialog-ongs-categories.component';

describe('DialogOngsCategoriesComponent', () => {
  let component: DialogOngsCategoriesComponent;
  let fixture: ComponentFixture<DialogOngsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogOngsCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogOngsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
