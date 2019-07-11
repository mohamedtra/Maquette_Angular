import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AaMsgDialogueComponent } from '../mvt-dialog/aa-msg-dialogue/aa-msg-dialogue.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-event-type-msg',
  templateUrl: './event-type-msg.component.html',
  styleUrls: ['./event-type-msg.component.css']
})

export class EventTypeMsgComponent  {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
// tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AaMsgDialogueComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

/* @Component({
// tslint:disable-next-line: component-selector
  selector: 'event-type-msg-dialog',
  templateUrl: 'event-type-msg-dialog.Component.html',
  styleUrls: ['./event-type-msg-dialog.component.css']
  })

  export class EventTypeMsgDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<EventTypeMsgDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

  }

 */




