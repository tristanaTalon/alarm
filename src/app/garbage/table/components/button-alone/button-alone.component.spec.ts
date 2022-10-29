import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAloneComponent } from './button-alone.component';

describe('ButtonAloneComponent', () => {
  let component: ButtonAloneComponent;
  let fixture: ComponentFixture<ButtonAloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
