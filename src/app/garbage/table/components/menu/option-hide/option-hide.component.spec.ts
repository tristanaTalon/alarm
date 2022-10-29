import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionHideComponent } from './option-hide.component';

describe('OptionHideComponent', () => {
  let component: OptionHideComponent;
  let fixture: ComponentFixture<OptionHideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionHideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionHideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
