import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AaMsgDialogComponent } from './components/simulator/mvt-dialog/aa-msg-dialog/aa-msg-dialog.component';
import { SimulatorModule } from './components/simulator/simulator.module';
import { MaterialModule } from './material.module';
import { AdMsgDialogComponent } from './components/simulator/mvt-dialog/ad-msg-dialog/ad-msg-dialog.component';
import { EaMsgDialogComponent } from './components/simulator/mvt-dialog/ea-msg-dialog/ea-msg-dialog.component';
import { NiMsgDialogComponent } from './components/simulator/mvt-dialog/ni-msg-dialog/ni-msg-dialog.component';
import { TakeofMsgDialogComponent } from './components/simulator/mvt-dialog/takeof-msg-dialog/takeof-msg-dialog.component';
import { TouchdownMsgDialogComponent } from './components/simulator/mvt-dialog/touchdown-msg-dialog/touchdown-msg-dialog.component';
import { AxDxMsgDialogComponent } from './components/simulator/mvt-dialog/ax-dx-msg-dialog/ax-dx-msg-dialog.component';
import { EdMsgDialogComponent } from './components/simulator/mvt-dialog/ed-msg-dialog/ed-msg-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SimulatorModule,
    MaterialModule
  ],
  entryComponents: [AaMsgDialogComponent, AdMsgDialogComponent, EaMsgDialogComponent, NiMsgDialogComponent, TakeofMsgDialogComponent,
    TouchdownMsgDialogComponent, AxDxMsgDialogComponent, EdMsgDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
