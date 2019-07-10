import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';
<<<<<<< HEAD
import { EventTypeMsgComponent, EventTypeMsgDialogComponent } from './event-type-msg/event-type-msg.component';

@NgModule({
  declarations: [EventsMsgComponent, EventTypeMsgComponent, EventTypeMsgDialogComponent],
=======
import { FlightInfoComponent } from './flight-info/flight-info.component';

@NgModule({
  declarations: [EventsMsgComponent, FlightInfoComponent],
>>>>>>> 910dcd7dd37f9903b959e8f312d92d3bad90d619
  imports: [
    CommonModule,
    MaterialModule
  ],
<<<<<<< HEAD
  exports: [EventsMsgComponent, EventTypeMsgComponent, EventTypeMsgDialogComponent]
=======
  exports: [EventsMsgComponent, FlightInfoComponent]
>>>>>>> 910dcd7dd37f9903b959e8f312d92d3bad90d619
})
export class EventsMessagesModule { }
