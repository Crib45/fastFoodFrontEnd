import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-edit-employees',
  templateUrl: './edit-employees.component.html',
  styleUrls: ['./edit-employees.component.css']
})
export class EditEmployeesComponent implements OnInit {
  restaurant;
  employees;
  employeeEmailForAdding;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'remove'];
  dataSource = new MatTableDataSource<any>([]);
  returnMessage: string;

  constructor(private dialogRef: MatDialogRef<EditEmployeesComponent>, private service: BackendService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.restaurant = data.restaurant;
    console.log(this.restaurant)
  }

  ngOnInit() {
    this.getEmployees(this.restaurant.id);
    console.log(this.employees)
  }

  getEmployees(restaurantId) {
    this.service.getAllUsersEmployedAtByIdRestaurant(restaurantId).subscribe(data => {
      this.employees = data;
      this.dataSource.data = this.employees;
      console.log(this.employees)
    })
  }

  removeEmployee(user) {
    this.service.removeUserEmployedAt(user).subscribe(data => {
      this.returnMessage = data;
      this.getEmployees(this.restaurant.id);
    })
  }

  addEmployee(email, restaurantId) {
    this.service.addUserEmployedAt(email, restaurantId).subscribe(data => {
      this.returnMessage = data;
      this.getEmployees(this.restaurant.id);
    })
  }
}
