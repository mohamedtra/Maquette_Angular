import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-ni-msg-dialog',
  templateUrl: './ni-msg-dialog.component.html',
  styleUrls: ['./ni-msg-dialog.component.css']
})
export class NiMsgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NiMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
