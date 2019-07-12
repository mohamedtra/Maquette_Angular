import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTypeMsgComponent } from './events-type-msg.component';

describe('EventsTypeMsgComponent', () => {
  let component: EventsTypeMsgComponent;
  let fixture: ComponentFixture<EventsTypeMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTypeMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTypeMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
