export class Flight {
  company: string;
  flightNumber: string;
  operationalSuffix: string;
  aircraftType: string;
  aircraftRegistration: string;
  flightIdentifierDate: string;
  flightLegs: Array<flightLeg>;
}
