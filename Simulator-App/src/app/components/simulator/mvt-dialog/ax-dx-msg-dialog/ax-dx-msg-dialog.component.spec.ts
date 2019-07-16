import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxDxMsgDialogComponent } from './ax-dx-msg-dialog.component';

describe('AxDxMsgDialogComponent', () => {
  let component: AxDxMsgDialogComponent;
  let fixture: ComponentFixture<AxDxMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxDxMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxDxMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
