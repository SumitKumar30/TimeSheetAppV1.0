import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivildeptComponent } from './civildept.component';

describe('CivildeptComponent', () => {
  let component: CivildeptComponent;
  let fixture: ComponentFixture<CivildeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivildeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivildeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
