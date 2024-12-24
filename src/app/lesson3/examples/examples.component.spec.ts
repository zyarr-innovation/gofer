import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson3ExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: lesson3ExamplesComponent;
  let fixture: ComponentFixture<lesson3ExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson3ExamplesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson3ExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
