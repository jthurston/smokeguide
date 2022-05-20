import { Component, HostListener, Renderer2, VERSION } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Smoke } from './smoke';
import { SMOKES } from './smoke-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'hotkeystest';
  displayedColumns = ['meatType','smokingTemp','targetInternalTemp','usdaMin','suggestions'];
  dataSource = new MatTableDataSource(SMOKES);
  name = 'Angular ' + VERSION.major;

  log($event: any) {
    console.log($event);
  }

  giveFeedBack() {
    alert('this alert');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
