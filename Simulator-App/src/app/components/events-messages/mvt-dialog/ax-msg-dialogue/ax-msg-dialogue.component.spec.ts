import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxMsgDialogueComponent } from './ax-msg-dialogue.component';

describe('AxMsgDialogueComponent', () => {
  let component: AxMsgDialogueComponent;
  let fixture: ComponentFixture<AxMsgDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxMsgDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxMsgDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
