import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngsCategoriesAdminComponent } from './ongs-categories-admin.component';

describe('OngsCategoriesAdminComponent', () => {
  let component: OngsCategoriesAdminComponent;
  let fixture: ComponentFixture<OngsCategoriesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngsCategoriesAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngsCategoriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
