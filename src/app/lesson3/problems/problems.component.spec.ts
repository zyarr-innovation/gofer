import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson3ProblemsComponent } from './problems.component';

describe('ProblemsComponent', () => {
  let component: lesson3ProblemsComponent;
  let fixture: ComponentFixture<lesson3ProblemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson3ProblemsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson3ProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
