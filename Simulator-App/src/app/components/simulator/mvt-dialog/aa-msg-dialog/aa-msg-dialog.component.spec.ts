import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AaMsgDialogComponent } from './aa-msg-dialog.component';

describe('AaMsgDialogComponent', () => {
  let component: AaMsgDialogComponent;
  let fixture: ComponentFixture<AaMsgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AaMsgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AaMsgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
