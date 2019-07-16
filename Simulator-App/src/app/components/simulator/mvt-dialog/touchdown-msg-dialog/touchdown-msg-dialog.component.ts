import { Component, OnInit, Inject } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-touchdown-msg-dialog',
  templateUrl: './touchdown-msg-dialog.component.html',
  styleUrls: ['./touchdown-msg-dialog.component.css']
})
export class TouchdownMsgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TouchdownMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
