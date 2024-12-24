import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson1ProblemComponent } from './problem.component';

describe('ProblemComponent', () => {
  let component: lesson1ProblemComponent;
  let fixture: ComponentFixture<lesson1ProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson1ProblemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson1ProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
