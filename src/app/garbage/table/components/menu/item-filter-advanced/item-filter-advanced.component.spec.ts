import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilterAdvancedComponent } from './item-filter-advanced.component';

describe('ItemFilterAdvancedComponent', () => {
  let component: ItemFilterAdvancedComponent;
  let fixture: ComponentFixture<ItemFilterAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFilterAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilterAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
