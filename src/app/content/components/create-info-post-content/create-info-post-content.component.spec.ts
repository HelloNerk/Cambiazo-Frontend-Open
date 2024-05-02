import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInfoPostContentComponent } from './create-info-post-content.component';

describe('CreateInfoPostContentComponent', () => {
  let component: CreateInfoPostContentComponent;
  let fixture: ComponentFixture<CreateInfoPostContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInfoPostContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateInfoPostContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
