import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMsgComponent } from './events-msg.component';

describe('EventsMsgComponent', () => {
  let component: EventsMsgComponent;
  let fixture: ComponentFixture<EventsMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
