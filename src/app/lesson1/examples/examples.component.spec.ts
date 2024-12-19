import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncProgExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: FuncProgExamplesComponent;
  let fixture: ComponentFixture<FuncProgExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncProgExamplesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FuncProgExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
