import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flight';


@Component({
  selector: 'app-aa-msg-dialog',
  templateUrl: './aa-msg-dialog.component.html',
  styleUrls: ['./aa-msg-dialog.component.css']
})
export class AaMsgDialogComponent {
  @Input() flight: Flight;
  constructor(
    public dialogRef: MatDialogRef<AaMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
