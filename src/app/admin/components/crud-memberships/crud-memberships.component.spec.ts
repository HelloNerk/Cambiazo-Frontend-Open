import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMembershipsComponent } from './crud-memberships.component';

describe('CrudMembershipsComponent', () => {
  let component: CrudMembershipsComponent;
  let fixture: ComponentFixture<CrudMembershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudMembershipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudMembershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
