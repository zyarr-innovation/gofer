import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson2QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: lesson2QuizComponent;
  let fixture: ComponentFixture<lesson2QuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson2QuizComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson2QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
