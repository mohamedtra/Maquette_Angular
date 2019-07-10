import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [EventsMsgComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [EventsMsgComponent]
})
export class EventsMessagesModule { }
