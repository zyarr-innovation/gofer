import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroExplanationComponent } from './explanation.component';

describe('ExplanationComponent', () => {
  let component: IntroExplanationComponent;
  let fixture: ComponentFixture<IntroExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroExplanationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(IntroExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
