import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatesPostsContentComponent } from './lates-posts-content.component';

describe('LatesPostsContentComponent', () => {
  let component: LatesPostsContentComponent;
  let fixture: ComponentFixture<LatesPostsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatesPostsContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatesPostsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
