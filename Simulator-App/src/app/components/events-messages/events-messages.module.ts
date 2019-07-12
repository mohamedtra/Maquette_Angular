import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';
import { EventsTypeMsgComponent } from './events-type-msg/events-type-msg.component';
import { AaMsgDialogComponent } from './mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';

@NgModule({
  declarations: [EventsMsgComponent, EventsTypeMsgComponent, AaMsgDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],

  exports: [EventsMsgComponent, EventsTypeMsgComponent, AaMsgDialogComponent]


})
export class EventsMessagesModule { }
