import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.css']
})
export class EmployeeModalComponent implements OnInit {

  employeeForm: FormGroup;
  title = 'Add Employee';
  id: string | null;

  departmentOptions = ['Office', 'Warehouse', 'Delivery']


  //constructor IMPORTS
  constructor(private fb: FormBuilder,
              private location: Location,
              private toastr: ToastrService,
              private _employeeService: EmployeeService,
              private aRouter: ActivatedRoute) { 

        //Fields from FORMCONTROL()
        this.employeeForm = this.fb.group({
          employee_no: ['', Validators.required],
          name: ['', Validators.required],
          department: ['', Validators.required],
          role: ['', Validators.required],
        })
        this.id = this.aRouter.snapshot.paramMap.get('id');
      }



    ngOnInit(): void {
      this.editEmployee();
    }


  //add Employee
  addEmployee() {
    const EMPLOYEE: Employee = {
      employee_no: this.employeeForm.get('employee_no')?.value,
      name: this.employeeForm.get('name')?.value,
      department: this.employeeForm.get('department')?.value,
      role: this.employeeForm.get('role')?.value,
    }

    //edit employee
    if(this.id !== null){
      this._employeeService.editEmployee(this.id, EMPLOYEE).subscribe(data => {
        this.toastr.info('Employee successfully edited !', 'Employee Registered!', {
          positionClass:'toast-bottom-right',
          tapToDismiss:true
        });
        this.location.back()
      })
    }else{

      //add employee
      this._employeeService.addEmployee(EMPLOYEE).subscribe(data => {
        this.toastr.success('Employee added succesfully!', 'Employee Added!', {
          positionClass:'toast-bottom-right',
          tapToDismiss:true
        });
        this.location.back()
      }, error => {
        console.log(error);
        this.employeeForm.reset();
      })
    }

  
  }

  //edit employee function
  editEmployee() {
    if(this.id !== null) {
      this.title = 'Edit Employee';
      this._employeeService.ugradeEmployee(this.id).subscribe(data => {
        this.employeeForm.setValue({
          employee_no: data.employee_no,
          name: data.name,
          department: data.department,
          role: data.role,
        })
      })
    }
  }

  //cancel button
  return(){
    this.location.back()
  }

}