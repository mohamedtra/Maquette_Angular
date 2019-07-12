import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AaMsgDialogComponent } from '../mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
 }
@Component({
  selector: 'app-events-type-msg',
  templateUrl: './events-type-msg.component.html',
  styleUrls: ['./events-type-msg.component.css']
})
export class EventsTypeMsgComponent  {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
 // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(AaMsgDialogComponent, {
      width: '500px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnInit() {
  }

}
