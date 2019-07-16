import { Component, OnInit, Inject } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-takeof-msg-dialog',
  templateUrl: './takeof-msg-dialog.component.html',
  styleUrls: ['./takeof-msg-dialog.component.css']
})
export class TakeofMsgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TakeofMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
