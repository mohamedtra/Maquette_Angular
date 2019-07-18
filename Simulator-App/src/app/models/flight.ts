import { FlightLeg } from './flightleg';


export class Flight {
  company: string;
  flightNumber: string;
  operationalSuffix: string;
  aircraftType: string;
  aircraftRegistration: string;
  flightIdentifierDate: Date;
  flightLegs: Array<FlightLeg>;
}
