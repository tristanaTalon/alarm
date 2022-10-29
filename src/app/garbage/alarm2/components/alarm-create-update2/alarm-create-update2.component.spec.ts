import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmCreateUpdate2Component } from './alarm-create-update2.component';

describe('AlarmCreateUpdate2Component', () => {
  let component: AlarmCreateUpdate2Component;
  let fixture: ComponentFixture<AlarmCreateUpdate2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmCreateUpdate2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmCreateUpdate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
