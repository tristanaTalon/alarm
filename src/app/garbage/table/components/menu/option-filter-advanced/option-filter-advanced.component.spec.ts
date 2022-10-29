import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFilterAdvancedComponent } from './option-filter-advanced.component';

describe('OptionFilterAdvancedComponent', () => {
  let component: OptionFilterAdvancedComponent;
  let fixture: ComponentFixture<OptionFilterAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionFilterAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionFilterAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
