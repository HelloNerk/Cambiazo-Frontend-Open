import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOngsComponent } from './filter-ongs.component';

describe('FilterOngsComponent', () => {
  let component: FilterOngsComponent;
  let fixture: ComponentFixture<FilterOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterOngsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
