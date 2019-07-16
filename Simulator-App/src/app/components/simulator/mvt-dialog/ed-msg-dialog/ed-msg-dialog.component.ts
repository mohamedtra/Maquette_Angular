import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-ed-msg-dialog',
  templateUrl: './ed-msg-dialog.component.html',
  styleUrls: ['./ed-msg-dialog.component.css']
})
export class EdMsgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EdMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
