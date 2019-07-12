import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AaMsgDialogComponent } from './components/simulator/mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';
import { SimulatorModule } from './components/simulator/simulator.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimulatorModule
  ],
  entryComponents: [AaMsgDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
