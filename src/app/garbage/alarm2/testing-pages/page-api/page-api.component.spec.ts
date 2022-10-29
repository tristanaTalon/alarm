import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageApiComponent } from './page-api.component';

describe('PageApiComponent', () => {
  let component: PageApiComponent;
  let fixture: ComponentFixture<PageApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
