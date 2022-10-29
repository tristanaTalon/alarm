import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilterFastComponent } from './item-filter-fast.component';

describe('ItemFilterFastComponent', () => {
  let component: ItemFilterFastComponent;
  let fixture: ComponentFixture<ItemFilterFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFilterFastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilterFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
