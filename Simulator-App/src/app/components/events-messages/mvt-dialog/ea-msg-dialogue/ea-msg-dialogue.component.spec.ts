import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaMsgDialogueComponent } from './ea-msg-dialogue.component';

describe('EaMsgDialogueComponent', () => {
  let component: EaMsgDialogueComponent;
  let fixture: ComponentFixture<EaMsgDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaMsgDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaMsgDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
