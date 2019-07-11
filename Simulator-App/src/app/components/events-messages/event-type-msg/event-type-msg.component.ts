/* import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

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
    const dialogRef = this.dialog.open(, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


 */





