import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  supplier_no: number;
  phone_no: string;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {supplier_no: 1, name: 'John Doe', phone_no: "09271752569", location: 'Philippines'},
  {supplier_no: 2, name: 'Seth Rolen', phone_no: "09271752569", location: 'USA'},
  {supplier_no: 3, name: 'Lily Collins', phone_no: "09271752569", location: 'Canada'},
  {supplier_no: 4, name: 'Barrack Obama', phone_no:"09271752569", location: 'Balibago'},
  {supplier_no: 5, name: 'The Rock', phone_no: "09271752569", location: 'Don Jose'},
  {supplier_no: 6, name: 'Jack Ma', phone_no: "09271752569", location: 'Balibago'},
  {supplier_no: 7, name: 'Alex Ten', phone_no: "09271752569", location: 'Don Bosco'},
  {supplier_no: 8, name: 'Kata Rina', phone_no: "09271752569", location: 'Silang'},
  {supplier_no: 9, name: 'Steve Carell', phone_no: "09271752569", location: 'Cavite'},
  {supplier_no: 10, name: 'Steve Jobs', phone_no: "09271752569", location: 'Tagaytay'},
];


 @Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

export class SupplierComponent implements AfterViewInit {
  displayedColumns: string[] = ['supplier_no', 'name', 'phone_no', 'location'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort)
   sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}