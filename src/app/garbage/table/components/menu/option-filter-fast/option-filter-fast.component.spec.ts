import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFilterFastComponent } from './option-filter-fast.component';

describe('OptionFilterFastComponent', () => {
  let component: OptionFilterFastComponent;
  let fixture: ComponentFixture<OptionFilterFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionFilterFastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFilterFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
