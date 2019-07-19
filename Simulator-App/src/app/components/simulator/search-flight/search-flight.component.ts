import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightLeg } from 'src/app/models/flightleg';

@Component({
  selector: 'app-search-flight-info',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  @Input() flight: Flight;

  company: string;
  flightNumber: string;
  operationalSuffix: string;
  flightDate: Date;

  constructor() { }

  ngOnInit() {
  }

  defaultDisplay(): void {
    console.log(this.flight.company);
    console.log(this.flight.flightNumber);
    console.log(this.flight.operationalSuffix);
  }

  checkInformation() {
    this.flight.company = this.company;
    this.flight.flightNumber = this.flightNumber;
    this.flight.operationalSuffix = this.operationalSuffix;
    this.flight.aircraftRegistration = 'FHBNR';
    this.flight.aircraftType = '320';
    this.flight.flightIdentifierDate = this.flightDate;


    this.flight.flightLegs = [];

    const fl1: FlightLeg = new FlightLeg();
    const fl2: FlightLeg = new FlightLeg();

    fl1.arrPkg = 'B20';
    fl1.depPkg = 'H02';
    fl1.depStation = 'NCE1';
    fl1.arrStation = 'CDG1';
    fl1.depTime = '07:00';
    fl1.arrTime = '08:45';
    fl1.depTimeType = 'S';
    fl1.arrTimeType = 'E';
    fl1.takeOf = '08:00';
    fl1.touchdown = '14:30';
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
