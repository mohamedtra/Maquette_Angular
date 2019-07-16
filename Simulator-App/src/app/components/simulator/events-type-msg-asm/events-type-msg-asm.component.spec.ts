import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTypeMsgAsmComponent } from './events-type-msg-asm.component';

describe('EventsTypeMsgAsmComponent', () => {
  let component: EventsTypeMsgAsmComponent;
  let fixture: ComponentFixture<EventsTypeMsgAsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsTypeMsgAsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTypeMsgAsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
