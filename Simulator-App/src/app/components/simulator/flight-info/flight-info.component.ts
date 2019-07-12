import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent implements OnInit {

  displayedColumns: string[] = ['dep_esc', 'dep_term', 'dep_time', 'arr_esc', 'arr_term', 'arr_time'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatTableDataSource<InfoFlight>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface InfoFlight {
  dep_esc: string;
  dep_term: string;
  dep_time: string;
  arr_esc: string;
  arr_term: string;
  arr_time: string;
}

const ELEMENT_DATA: InfoFlight[] = [
  {dep_esc: 'NCE', dep_term: 'NCE1', dep_time: '12:00', arr_esc: 'CDG', arr_term: 'CDG1', arr_time: '14:00' },
  {dep_esc: 'CDG', dep_term: 'CDG1', dep_time: '16:00', arr_esc: 'NCE', arr_term: 'NCE1', arr_time: '20:00' },
  {dep_esc: 'NCE', dep_term: 'NCE1', dep_time: '22:00', arr_esc: 'CDG', arr_term: 'CDG1', arr_time: '00:00' },

];
