import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionTemplateComponent } from './session-template.component';

describe('SessionTemplateComponent', () => {
  let component: SessionTemplateComponent;
  let fixture: ComponentFixture<SessionTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
