import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ViewOrdersComponent } from '../restaurant/view-orders/view-orders.component';
import { EditEmployeesComponent } from '../edit-employees/edit-employees.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo;
  returnMessage: Object;
  ownedRestaurants: any;
  displayedColumns: string[] = ['restaurantName', 'restauranDescription', 'editRestaurant', 'manageEmployees', 'checkOrders'];
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns1: string[] = ['restaurantName', 'restauranDescription', 'editRestaurant', 'checkOrders'];
  dataSource1 = new MatTableDataSource<any>([]);
  employedAtRestaurant: Object;


  constructor(private service: BackendService, private dialog: MatDialog) { }

  profileForm = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  ngOnInit() {
    this.getUserInfo();
    this.getUserRestaurants();
    this.getEmployedRestaurant();
  }

  getUserInfo() {
    this.service.getUserInfo().subscribe(data => {
      this.userInfo = data;
      this.profileForm.patchValue({
        username: this.userInfo.username,
        firstName: this.userInfo.firstName,
        lastName: this.userInfo.lastName,
        email: this.userInfo.email,
        phone: this.userInfo.phone
      })
    });
  }

  saveEdits() {
    this.userInfo.firstName = this.profileForm.get('firstName').value;
    this.userInfo.lastName = this.profileForm.get('lastName').value;
    this.userInfo.email = this.profileForm.get('email').value;
    this.userInfo.phone = this.profileForm.get('phone').value;

    this.service.saveUserEdits(this.userInfo).subscribe(data => {
      this.returnMessage = data;
    })
  }

  getUserRestaurants() {
    this.service.getUserRestaurants().subscribe(data => {
      this.ownedRestaurants = data;
      this.dataSource.data = this.ownedRestaurants;
    });
  }

  getEmployedRestaurant() {
    this.service.getEmployedAtRestaurant().subscribe(data => {
      this.employedAtRestaurant = data;
      this.dataSource1.data.push(this.employedAtRestaurant);
      this.dataSource1.data = this.dataSource1.data.slice();
      console.log(this.dataSource1)
    });
  }

  checkOrders(restaurant) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      restaurant: restaurant
    };

    this.dialog.open(ViewOrdersComponent, dialogConfig);
  }

  editEmployees(restaurant) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = {
      restaurant: restaurant
    };

    this.dialog.open(EditEmployeesComponent, dialogConfig);
  }
}
