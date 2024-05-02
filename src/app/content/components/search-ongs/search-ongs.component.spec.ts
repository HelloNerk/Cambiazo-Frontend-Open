import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOngsComponent } from './search-ongs.component';

describe('SearchOngsComponent', () => {
  let component: SearchOngsComponent;
  let fixture: ComponentFixture<SearchOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchOngsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
