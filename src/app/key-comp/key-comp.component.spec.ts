import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCompComponent } from './key-comp.component';

describe('KeyCompComponent', () => {
  let component: KeyCompComponent;
  let fixture: ComponentFixture<KeyCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
