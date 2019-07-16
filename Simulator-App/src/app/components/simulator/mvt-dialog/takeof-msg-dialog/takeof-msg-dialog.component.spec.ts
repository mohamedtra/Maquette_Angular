import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeofMsgDialogComponent } from './takeof-msg-dialog.component';

describe('TakeofMsgDialogComponent', () => {
  let component: TakeofMsgDialogComponent;
  let fixture: ComponentFixture<TakeofMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeofMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeofMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
