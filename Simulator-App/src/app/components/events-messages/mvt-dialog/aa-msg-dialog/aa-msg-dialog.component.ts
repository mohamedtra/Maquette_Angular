import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../events-type-msg/events-type-msg.component';

@Component({
  selector: 'app-aa-msg-dialog',
  templateUrl: './aa-msg-dialog.component.html',
  styleUrls: ['./aa-msg-dialog.component.css']
})
export class AaMsgDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<AaMsgDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
