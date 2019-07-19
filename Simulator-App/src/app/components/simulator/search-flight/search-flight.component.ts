import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

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
  }

}
