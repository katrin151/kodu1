import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsikViewComponent } from './isik-view.component';

describe('IsikViewComponent', () => {
  let component: IsikViewComponent;
  let fixture: ComponentFixture<IsikViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsikViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsikViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
