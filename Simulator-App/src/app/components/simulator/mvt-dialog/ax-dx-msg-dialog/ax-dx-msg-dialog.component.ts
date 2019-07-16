import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-ax-dx-msg-dialog',
  templateUrl: './ax-dx-msg-dialog.component.html',
  styleUrls: ['./ax-dx-msg-dialog.component.css']
})
export class AxDxMsgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AxDxMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
