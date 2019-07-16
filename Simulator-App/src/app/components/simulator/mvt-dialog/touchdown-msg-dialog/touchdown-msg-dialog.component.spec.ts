import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchdownMsgDialogComponent } from './touchdown-msg-dialog.component';

describe('TouchdownMsgDialogComponent', () => {
  let component: TouchdownMsgDialogComponent;
  let fixture: ComponentFixture<TouchdownMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouchdownMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchdownMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
