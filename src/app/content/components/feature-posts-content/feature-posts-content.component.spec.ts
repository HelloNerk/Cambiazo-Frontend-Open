import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePostsContentComponent } from './feature-posts-content.component';

describe('FeaturePostsContentComponent', () => {
  let component: FeaturePostsContentComponent;
  let fixture: ComponentFixture<FeaturePostsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePostsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturePostsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
