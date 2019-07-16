import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiMsgDialogComponent } from './ni-msg-dialog.component';

describe('NiMsgDialogComponent', () => {
  let component: NiMsgDialogComponent;
  let fixture: ComponentFixture<NiMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
