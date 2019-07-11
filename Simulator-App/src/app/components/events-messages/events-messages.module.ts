import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { AaMsgDialogueComponent } from './mvt-dialog/aa-msg-dialogue/aa-msg-dialogue.component';


@NgModule({
  declarations: [EventsMsgComponent, FlightInfoComponent, AaMsgDialogueComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],

  exports: [EventsMsgComponent, FlightInfoComponent, AaMsgDialogueComponent]


})
export class EventsMessagesModule { }
