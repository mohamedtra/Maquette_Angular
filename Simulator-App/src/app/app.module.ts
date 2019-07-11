import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsMessagesModule } from './components/events-messages/events-messages.module';
import { AaMsgDialogueComponent } from './components/events-messages/mvt-dialog/aa-msg-dialogue/aa-msg-dialogue.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsMessagesModule,
    BrowserAnimationsModule
  ],
  entryComponents: [AaMsgDialogueComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
