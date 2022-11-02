import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSupportMeComponent } from './page-support-me.component';

describe('PageSupportMeComponent', () => {
  let component: PageSupportMeComponent;
  let fixture: ComponentFixture<PageSupportMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSupportMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSupportMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
