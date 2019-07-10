import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTypeMsgComponent } from './event-type-msg.component';

describe('EventTypeMsgComponent', () => {
  let component: EventTypeMsgComponent;
  let fixture: ComponentFixture<EventTypeMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventTypeMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTypeMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
