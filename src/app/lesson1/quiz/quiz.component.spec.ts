import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncProgQuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  let component: FuncProgQuizComponent;
  let fixture: ComponentFixture<FuncProgQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncProgQuizComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FuncProgQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
