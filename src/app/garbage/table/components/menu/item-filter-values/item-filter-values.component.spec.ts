import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilterValuesComponent } from './item-filter-values.component';

describe('ItemFilterValuesComponent', () => {
  let component: ItemFilterValuesComponent;
  let fixture: ComponentFixture<ItemFilterValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFilterValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilterValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
