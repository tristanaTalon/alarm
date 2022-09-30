import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmList2Component } from './alarm-list2.component';

describe('AlarmList2Component', () => {
  let component: AlarmList2Component;
  let fixture: ComponentFixture<AlarmList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
