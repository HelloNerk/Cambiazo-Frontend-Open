import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostInfoUserContentComponent } from './create-post-info-user-content.component';

describe('CreatePostInfoUserContentComponent', () => {
  let component: CreatePostInfoUserContentComponent;
  let fixture: ComponentFixture<CreatePostInfoUserContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePostInfoUserContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePostInfoUserContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
