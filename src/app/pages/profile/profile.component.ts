import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo;
  returnMessage: Object;

  constructor(private service: BackendService) { }

  profileForm = new FormGroup({
    username: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  });

  ngOnInit() {
    this.getUserInfo();
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
    // this.service.
  }

}
