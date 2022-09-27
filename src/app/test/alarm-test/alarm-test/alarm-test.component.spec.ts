import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmTestComponent } from './alarm-test.component';

describe('AlarmTestComponent', () => {
  let component: AlarmTestComponent;
  let fixture: ComponentFixture<AlarmTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
