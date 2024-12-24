import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QiuzComponent } from './qiuz.component';

describe('QiuzComponent', () => {
  let component: QiuzComponent;
  let fixture: ComponentFixture<QiuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QiuzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QiuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
