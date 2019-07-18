import { Component, OnInit } from '@angular/core';
import { Flight } from './models/flight';
import { FlightLeg } from './models/flightleg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Simulator-App';
  flight: Flight = new Flight();

  ngOnInit(): void {
    this.flight.company = 'AF';
    this.flight.flightNumber = '019';
    this.flight.operationalSuffix = '';
    this.flight.flightIdentifierDate = new Date();

    this.flight.flightLegs = [];

    const fl1: FlightLeg = new FlightLeg();
    const fl2: FlightLeg = new FlightLeg();

    fl1.arrPkg = 'B20';
    fl1.depPkg = 'H02';
    fl1.depStation = 'NCE1';
    fl1.arrStation = 'CDG1';
    fl1.depTime = '07:00 S';
    fl1.arrTime = '08:45 S';

    fl2.arrPkg = 'H16';
    fl2.depPkg = 'B20';
    fl2.depStation = 'CDG1';
    fl2.arrStation = 'MRS1';
    fl2.depTime = '10:00 S';
    fl2.arrTime = '11:45 S';


    this.flight.flightLegs.push(fl1);
    this.flight.flightLegs.push(fl2);
  }

}
