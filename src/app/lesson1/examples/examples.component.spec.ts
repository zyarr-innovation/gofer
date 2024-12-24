import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lesson1ExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: lesson1ExamplesComponent;
  let fixture: ComponentFixture<lesson1ExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lesson1ExamplesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(lesson1ExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
