import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { HeaderComponent } from './header/header.component';
import { AaMsgDialogComponent } from './mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { EventsTypeMsgMvtComponent } from './events-type-msg-mvt/events-type-msg-mvt.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { AdMsgDialogComponent } from './mvt-dialog/ad-msg-dialog/ad-msg-dialog.component';
import { AxDxMsgDialogComponent } from './mvt-dialog/ax-dx-msg-dialog/ax-dx-msg-dialog.component';
import { TakeofMsgDialogComponent } from './mvt-dialog/takeof-msg-dialog/takeof-msg-dialog.component';
import { EaMsgDialogComponent } from './mvt-dialog/ea-msg-dialog/ea-msg-dialog.component';
import { EdMsgDialogComponent } from './mvt-dialog/ed-msg-dialog/ed-msg-dialog.component';
import { NiMsgDialogComponent } from './mvt-dialog/ni-msg-dialog/ni-msg-dialog.component';
import { TouchdownMsgDialogComponent } from './mvt-dialog/touchdown-msg-dialog/touchdown-msg-dialog.component';
import { EventsTypeMsgAsmComponent } from './events-type-msg-asm/events-type-msg-asm.component';



@NgModule({
  declarations: [
    SearchFlightComponent,
    EventsMsgComponent,
    HeaderComponent,
    AaMsgDialogComponent,
    EventsTypeMsgMvtComponent,
    FlightInfoComponent,
    AdMsgDialogComponent,
    AxDxMsgDialogComponent,
    TakeofMsgDialogComponent,
    EaMsgDialogComponent,
    EdMsgDialogComponent,
    NiMsgDialogComponent,
    TouchdownMsgDialogComponent,
    EventsTypeMsgAsmComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SearchFlightComponent,
    EventsMsgComponent,
    HeaderComponent,
    AaMsgDialogComponent,
    FlightInfoComponent,
    EventsTypeMsgMvtComponent]
})
export class SimulatorModule { }
