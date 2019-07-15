import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.css']
})
export class FlightInfoComponent implements OnInit {

  displayedColumns: string[] = ['leg', 'dep_esc', 'arr_esc', 'dep_time', 'arr_time', 'pkg_dep', 'pkg_arr'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource = new MatTableDataSource<InfoFlight>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}

export interface InfoFlight {
  leg: string;
  dep_esc: string;
  dep_time: string;
  arr_esc: string;
  arr_time: string;
  pkg_dep: string;
  pkg_arr: string;
}

const ELEMENT_DATA: InfoFlight[] = [
  {leg: '0', dep_esc: 'NCE1', dep_time: '07:00 S', arr_esc: 'CDG1', arr_time: '08:45 S', pkg_dep: 'K22', pkg_arr: 'B22'},

  {leg: '1', dep_esc: 'CDG1', dep_time: '10:00 S', arr_esc: 'MRS1', arr_time: '11:45 S', pkg_dep: 'C32', pkg_arr: 'H16'},

  {leg: '2', dep_esc: 'MRS1', dep_time: '13:30 S', arr_esc: 'BAR1', arr_time: '15:00 S', pkg_dep: 'N02', pkg_arr: 'C01'},

  {leg: '3', dep_esc: 'BAR1', dep_time: '17:00 S', arr_esc: 'MRS1', arr_time: '18:30 S', pkg_dep: 'J37', pkg_arr: 'G06'},

];
