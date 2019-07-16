import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTypeMsgMvtComponent } from './events-type-msg-mvt.component';

describe('EventsTypeMsgComponent', () => {
  let component: EventsTypeMsgMvtComponent;
  let fixture: ComponentFixture<EventsTypeMsgMvtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTypeMsgMvtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTypeMsgMvtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
