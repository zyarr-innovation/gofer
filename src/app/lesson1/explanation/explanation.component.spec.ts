import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson1ExplanationComponent } from './explanation.component';

describe('ExplanationComponent', () => {
  let component: lesson1ExplanationComponent;
  let fixture: ComponentFixture<lesson1ExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson1ExplanationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson1ExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
