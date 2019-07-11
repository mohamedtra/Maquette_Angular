import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdMsgDialogueComponent } from './ed-msg-dialogue.component';

describe('EdMsgDialogueComponent', () => {
  let component: EdMsgDialogueComponent;
  let fixture: ComponentFixture<EdMsgDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdMsgDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdMsgDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
