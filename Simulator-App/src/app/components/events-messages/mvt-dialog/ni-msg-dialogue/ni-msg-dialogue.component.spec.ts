import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiMsgDialogueComponent } from './ni-msg-dialogue.component';

describe('NiMsgDialogueComponent', () => {
  let component: NiMsgDialogueComponent;
  let fixture: ComponentFixture<NiMsgDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiMsgDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiMsgDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
