import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsimeneComponent } from './esimene.component';

describe('EsimeneComponent', () => {
  let component: EsimeneComponent;
  let fixture: ComponentFixture<EsimeneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsimeneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsimeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
