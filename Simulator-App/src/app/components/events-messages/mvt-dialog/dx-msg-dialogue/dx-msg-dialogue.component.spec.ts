import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DxMsgDialogueComponent } from './dx-msg-dialogue.component';

describe('DxMsgDialogueComponent', () => {
  let component: DxMsgDialogueComponent;
  let fixture: ComponentFixture<DxMsgDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DxMsgDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DxMsgDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
