import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdMsgDialogComponent } from './ad-msg-dialog.component';

describe('AdMsgDialogComponent', () => {
  let component: AdMsgDialogComponent;
  let fixture: ComponentFixture<AdMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
