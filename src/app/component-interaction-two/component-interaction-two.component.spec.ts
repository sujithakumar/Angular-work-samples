import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionTwoComponent } from './component-interaction-two.component';

describe('ComponentInteractionTwoComponent', () => {
  let component: ComponentInteractionTwoComponent;
  let fixture: ComponentFixture<ComponentInteractionTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
