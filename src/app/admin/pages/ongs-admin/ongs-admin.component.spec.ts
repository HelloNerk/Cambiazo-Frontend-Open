import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngsAdminComponent } from './ongs-admin.component';

describe('OngsAdminComponent', () => {
  let component: OngsAdminComponent;
  let fixture: ComponentFixture<OngsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngsAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OngsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
