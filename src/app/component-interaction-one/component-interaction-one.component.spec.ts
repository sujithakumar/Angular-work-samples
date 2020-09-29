import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionOneComponent } from './component-interaction-one.component';

describe('ComponentInteractionOneComponent', () => {
  let component: ComponentInteractionOneComponent;
  let fixture: ComponentFixture<ComponentInteractionOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
