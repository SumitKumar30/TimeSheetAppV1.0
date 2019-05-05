import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicdeptComponent } from './electronicdept.component';

describe('ElectronicdeptComponent', () => {
  let component: ElectronicdeptComponent;
  let fixture: ComponentFixture<ElectronicdeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectronicdeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
