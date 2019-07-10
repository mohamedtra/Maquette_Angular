import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsMessagesModule } from './components/events-messages/events-messages.module';
import { EventTypeMsgDialogComponent } from './components/events-messages/event-type-msg/event-type-msg.component';

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
  entryComponents: [EventTypeMsgDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
