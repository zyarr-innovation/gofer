import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson3QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: lesson3QuizComponent;
  let fixture: ComponentFixture<lesson3QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson3QuizComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson3QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
