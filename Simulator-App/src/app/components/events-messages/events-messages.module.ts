import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';
import { EventTypeMsgComponent, EventTypeMsgDialogComponent } from './event-type-msg/event-type-msg.component';

@NgModule({
  declarations: [EventsMsgComponent, EventTypeMsgComponent, EventTypeMsgDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [EventsMsgComponent, EventTypeMsgComponent, EventTypeMsgDialogComponent]
})
export class EventsMessagesModule { }
