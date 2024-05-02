import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostsContentComponent } from './search-posts-content.component';

describe('SearchPostsContentComponent', () => {
  let component: SearchPostsContentComponent;
  let fixture: ComponentFixture<SearchPostsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPostsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchPostsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
