import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AaMsgDialogComponent } from '../mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';
import { Flight } from 'src/app/models/flight';
import { AdMsgDialogComponent } from '../mvt-dialog/ad-msg-dialog/ad-msg-dialog.component';
import { EaMsgDialogComponent } from '../mvt-dialog/ea-msg-dialog/ea-msg-dialog.component';
import { NiMsgDialogComponent } from '../mvt-dialog/ni-msg-dialog/ni-msg-dialog.component';
import { EdMsgDialogComponent } from '../mvt-dialog/ed-msg-dialog/ed-msg-dialog.component';
import { TakeofMsgDialogComponent } from '../mvt-dialog/takeof-msg-dialog/takeof-msg-dialog.component';
import { TouchdownMsgDialogComponent } from '../mvt-dialog/touchdown-msg-dialog/touchdown-msg-dialog.component';
import { AxDxMsgDialogComponent } from '../mvt-dialog/ax-dx-msg-dialog/ax-dx-msg-dialog.component';

@Component({
  selector: 'app-events-type-msg-mvt',
  templateUrl: './events-type-msg-mvt.component.html',
  styleUrls: ['./events-type-msg-mvt.component.css']
})
export class EventsTypeMsgMvtComponent   {
  @Input() flight: Flight;
  constructor(public dialog: MatDialog) {}
  // Actual arrival dialog
  openAaDialog(): void {
    console.log(this.flight.company);
    this.openDialog(AaMsgDialogComponent, '500px');
}
  // Actual departure dialog
  openAdDialog(): void {
    this.openDialog(AdMsgDialogComponent, '500px');
  }
  // Estimated arrival dialog
  openEaDialog(): void {
    this.openDialog(EaMsgDialogComponent, '500px');
  }
  // Estimated departure dialog
  openEdDialog(): void {
    this.openDialog(EdMsgDialogComponent, '500px');
  }
  // Next information dialog
  openNiDialog(): void {
    this.openDialog(NiMsgDialogComponent, '500px');
  }
  // TakeOf dialog
  openToDialog(): void {
    this.openDialog(TakeofMsgDialogComponent, '500px');
  }
  // Touchdown dialog
  openTdDialog(): void {
    this.openDialog(TouchdownMsgDialogComponent, '500px');
  }
  // Cancel arrival block dialog
  openAxDxDialog(): void {
    this.openDialog(AxDxMsgDialogComponent, '500px');
  }

  openDialog(MyComponent: any, pWidth: string) {
    const dialogRef = this.dialog.open(MyComponent, {
      width: pWidth, data: {flight: this.flight}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.flight = result;
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  }

}
