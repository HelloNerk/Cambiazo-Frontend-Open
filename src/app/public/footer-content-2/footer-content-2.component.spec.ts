import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContent2Component } from './footer-content-2.component';

describe('FooterContent2Component', () => {
  let component: FooterContent2Component;
  let fixture: ComponentFixture<FooterContent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContent2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterContent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
