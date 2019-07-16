import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaMsgDialogComponent } from './ea-msg-dialog.component';

describe('EaMsgDialogComponent', () => {
  let component: EaMsgDialogComponent;
  let fixture: ComponentFixture<EaMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
