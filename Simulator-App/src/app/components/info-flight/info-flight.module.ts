import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [FlightInfoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FlightInfoComponent]
})
export class InfoFlightModule { }
