import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicaldeptComponent } from './mechanicaldept.component';

describe('MechanicaldeptComponent', () => {
  let component: MechanicaldeptComponent;
  let fixture: ComponentFixture<MechanicaldeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicaldeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicaldeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
