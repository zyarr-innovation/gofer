import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncProgProblemComponent } from './problem.component';

describe('ProblemComponent', () => {
  let component: FuncProgProblemComponent;
  let fixture: ComponentFixture<FuncProgProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncProgProblemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FuncProgProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
