import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FBIntegrationComponent } from './fb-integration.component';

describe('FBIntegrationComponent', () => {
  let component: FBIntegrationComponent;
  let fixture: ComponentFixture<FBIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FBIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FBIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
