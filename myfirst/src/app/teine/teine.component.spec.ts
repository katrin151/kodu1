import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeineComponent } from './teine.component';

describe('TeineComponent', () => {
  let component: TeineComponent;
  let fixture: ComponentFixture<TeineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
