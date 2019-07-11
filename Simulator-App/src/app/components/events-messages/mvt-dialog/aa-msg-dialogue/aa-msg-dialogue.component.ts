import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../event-type-msg/event-type-msg.component';


@Component({
  selector: 'app-aa-msg-dialogue',
  templateUrl: './aa-msg-dialogue.component.html',
  styleUrls: ['./aa-msg-dialogue.component.css']
})
export class AaMsgDialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AaMsgDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }


}
