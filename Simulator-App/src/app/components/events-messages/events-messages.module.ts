import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsMsgComponent } from './events-msg/events-msg.component';
import { MaterialModule } from 'src/app/material.module';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { EventTypeMsgComponent} from './event-type-msg/event-type-msg.component';
import { AdMsgDialogueComponent } from './mvt-dialog/ad-msg-dialogue/ad-msg-dialogue.component';
import { EdMsgDialogueComponent } from './mvt-dialog/ed-msg-dialogue/ed-msg-dialogue.component';
import { EaMsgDialogueComponent } from './mvt-dialog/ea-msg-dialogue/ea-msg-dialogue.component';
import { AaMsgDialogueComponent } from './mvt-dialog/aa-msg-dialogue/aa-msg-dialogue.component';
import { NiMsgDialogueComponent } from './mvt-dialog/ni-msg-dialogue/ni-msg-dialogue.component';
import { AxMsgDialogueComponent } from './mvt-dialog/ax-msg-dialogue/ax-msg-dialogue.component';
import { DxMsgDialogueComponent } from './mvt-dialog/dx-msg-dialogue/dx-msg-dialogue.component';


@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [EventsMsgComponent, FlightInfoComponent, EventTypeMsgComponent, AdMsgDialogueComponent, EdMsgDialogueComponent, EaMsgDialogueComponent, AaMsgDialogueComponent, NiMsgDialogueComponent, AxMsgDialogueComponent, DxMsgDialogueComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],

// tslint:disable-next-line: max-line-length
  exports: [EventsMsgComponent, EventTypeMsgComponent , FlightInfoComponent , AdMsgDialogueComponent, EdMsgDialogueComponent, EaMsgDialogueComponent, AaMsgDialogueComponent, NiMsgDialogueComponent, AxMsgDialogueComponent, DxMsgDialogueComponent]


})
export class EventsMessagesModule { }
