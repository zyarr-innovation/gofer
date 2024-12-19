import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncProgExplanationComponent } from './explanation.component';

describe('ExplanationComponent', () => {
  let component: FuncProgExplanationComponent;
  let fixture: ComponentFixture<FuncProgExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncProgExplanationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncProgExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
