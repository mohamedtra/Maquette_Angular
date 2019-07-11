import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMsgDialogueComponent } from './ad-msg-dialogue.component';

describe('AdMsgDialogueComponent', () => {
  let component: AdMsgDialogueComponent;
  let fixture: ComponentFixture<AdMsgDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMsgDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMsgDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
