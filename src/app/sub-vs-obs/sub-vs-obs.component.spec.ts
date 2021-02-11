import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubVsObsComponent } from './sub-vs-obs.component';

describe('SubVsObsComponent', () => {
  let component: SubVsObsComponent;
  let fixture: ComponentFixture<SubVsObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubVsObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubVsObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
