import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';
import { FlightInfoComponent } from './flight-info/flight-info.component';


@NgModule({
  declarations: [EventsMsgComponent, FlightInfoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],

  exports: [EventsMsgComponent, FlightInfoComponent]


})
export class EventsMessagesModule { }
