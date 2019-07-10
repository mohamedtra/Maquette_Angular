import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { EventTypeMsgComponent, EventTypeMsgDialogComponent } from './event-type-msg/event-type-msg.component';

@NgModule({
  declarations: [EventsMsgComponent, FlightInfoComponent, EventTypeMsgComponent, EventTypeMsgDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],

  exports: [EventsMsgComponent, EventTypeMsgComponent, EventTypeMsgDialogComponent, FlightInfoComponent]


})
export class EventsMessagesModule { }
