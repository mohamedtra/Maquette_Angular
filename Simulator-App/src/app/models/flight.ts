import { FlightLeg } from './flightleg';


export class Flight {
  airlineCode: string;
  flightNumber: string;
  operationalSuffix: string;
  aircraftType: string;
  aircraftRegistration: string;
  flightIdentifierDate: Date;
  flightLegs: Array<FlightLeg>;
  currentArrival: Date;
}
