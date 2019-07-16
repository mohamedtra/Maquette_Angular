import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-ad-msg-dialog',
  templateUrl: './ad-msg-dialog.component.html',
  styleUrls: ['./ad-msg-dialog.component.css']
})
export class AdMsgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AdMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
