import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  filterTerm: any;
  employeeList: Employee[] = [];

  p:number = 1;



  constructor(
    private _employeeService: EmployeeService,
    private toastr: ToastrService) 
    
    { }

  ngOnInit(): void {
    this.getEmployee();
  }

  searchFilter() {
    this._employeeService.getEmployee().subscribe(filterTerm => {
      console.log(filterTerm);
      this.employeeList = filterTerm
    })
  }


  getEmployee() {
    this._employeeService.getEmployee().subscribe(data => {
      console.log(data);
      this.employeeList = data;
    }, error => {
      console.log(error);
    })
  }


  deleteEmployee(id: any) {
    let confirmation = confirm("Are you sure you want to delete this supply?")
    if(!confirmation){
      return
    }
    this._employeeService.deleteEmployee(id).subscribe(data => {
      this.toastr.error('Supplier has been removed!', 'Supplier Deleted.', {
        positionClass:'toast-bottom-right',
        tapToDismiss:true
      });
      this.getEmployee();
    }, error => {
      console.log(error);
    })
  }
}
