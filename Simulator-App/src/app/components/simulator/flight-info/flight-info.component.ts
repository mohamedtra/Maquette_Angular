import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Flight } from 'src/app/models/flight';
import { FlightLeg } from 'src/app/models/flightleg';
import { BaseDestroyableComponent } from '../../common/base.component';
import { RefreshService } from '../refresh.service';


@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent extends BaseDestroyableComponent {

  @Input() flight: Flight;

  displayedColumns: string[] = ['dep_esc', 'arr_esc', 'dep_time', 'arr_time', 'pkg_dep', 'pkg_arr'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource: MatTableDataSource<FlightLeg>;

  constructor(private refService: RefreshService) {
    super();
   }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {

    super.subscribe(this.refService.getFlightRetrieve(),
    result => { this.dataSource = new MatTableDataSource<FlightLeg>(this.flight.flightLegs); });
  }

}


