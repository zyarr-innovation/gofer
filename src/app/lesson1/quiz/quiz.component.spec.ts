import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson1QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: lesson1QuizComponent;
  let fixture: ComponentFixture<lesson1QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson1QuizComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson1QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
