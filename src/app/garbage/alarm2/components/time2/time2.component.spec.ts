import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Time2Component } from './time2.component';

describe('Time2Component', () => {
  let component: Time2Component;
  let fixture: ComponentFixture<Time2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Time2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Time2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
