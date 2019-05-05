import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerdeptComponent } from './computerdept.component';

describe('ComputerdeptComponent', () => {
  let component: ComputerdeptComponent;
  let fixture: ComponentFixture<ComputerdeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerdeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerdeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
