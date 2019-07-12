import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { HeaderComponent } from './header/header.component';
import { AaMsgDialogComponent } from './mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';
import { MaterialModule } from 'src/app/material.module';
import { EventsTypeMsgComponent } from './events-type-msg/events-type-msg.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';



@NgModule({
  declarations: [
    SearchFlightComponent,
    EventsMsgComponent,
    HeaderComponent,
    AaMsgDialogComponent,
    EventsTypeMsgComponent,
    FlightInfoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SearchFlightComponent,
    EventsMsgComponent,
    HeaderComponent,
    AaMsgDialogComponent,
    FlightInfoComponent,
    EventsTypeMsgComponent]
})
export class SimulatorModule { }
