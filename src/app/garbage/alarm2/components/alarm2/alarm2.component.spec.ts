import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alarm2Component } from './alarm2.component';

describe('Alarm2Component', () => {
  let component: Alarm2Component;
  let fixture: ComponentFixture<Alarm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alarm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alarm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
