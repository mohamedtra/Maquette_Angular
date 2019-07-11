import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaMsgDialogueComponent } from './aa-msg-dialogue.component';

describe('AaMsgDialogueComponent', () => {
  let component: AaMsgDialogueComponent;
  let fixture: ComponentFixture<AaMsgDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaMsgDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaMsgDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
