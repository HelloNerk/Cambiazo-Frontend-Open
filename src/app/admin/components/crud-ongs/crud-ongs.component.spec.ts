import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOngsComponent } from './crud-ongs.component';

describe('CrudOngsComponent', () => {
  let component: CrudOngsComponent;
  let fixture: ComponentFixture<CrudOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOngsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
