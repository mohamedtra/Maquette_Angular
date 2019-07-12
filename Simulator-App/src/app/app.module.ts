import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { EventsMessagesModule } from './components/events-messages/events-messages.module';
import { InfoFlightModule } from './components/info-flight/info-flight.module';
import { AaMsgDialogComponent } from './components/events-messages/mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    EventsMessagesModule,
    InfoFlightModule
  ],
  entryComponents: [AaMsgDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
