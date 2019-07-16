import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-ea-msg-dialog',
  templateUrl: './ea-msg-dialog.component.html',
  styleUrls: ['./ea-msg-dialog.component.css']
})
export class EaMsgDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EaMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public flight: Flight) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
