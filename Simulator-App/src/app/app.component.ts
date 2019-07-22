import { Component } from '@angular/core';
import { Flight } from './models/flight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Simulator-App';
  flight: Flight = new Flight();

}
