import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private _flightRetrieve: EventEmitter<any> =  new EventEmitter<any>();

  emit() {
    this._flightRetrieve.emit();
  }

  getFlightRetrieve() {
    return this._flightRetrieve;
  }

  constructor() { }
}
