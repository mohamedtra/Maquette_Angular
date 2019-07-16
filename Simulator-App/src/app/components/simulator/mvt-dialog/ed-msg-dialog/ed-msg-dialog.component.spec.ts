import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdMsgDialogComponent } from './ed-msg-dialog.component';

describe('EdMsgDialogComponent', () => {
  let component: EdMsgDialogComponent;
  let fixture: ComponentFixture<EdMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
