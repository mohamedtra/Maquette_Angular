import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-events-msg',
  templateUrl: './events-msg.component.html',
  styleUrls: ['./events-msg.component.css']
})
export class EventsMsgComponent implements OnInit {
  @Input() flight: Flight;
  constructor() { }

  ngOnInit() {
  }

}
