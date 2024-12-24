import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson3ExplanationComponent } from './explanation.component';

describe('ExplanationComponent', () => {
  let component: lesson3ExplanationComponent;
  let fixture: ComponentFixture<lesson3ExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson3ExplanationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson3ExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
