import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInfo: Object;

  constructor(private service: BackendService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.service.getUserInfo().subscribe(data => {
      this.userInfo = data;
      console.log(this.userInfo);
    })
  }
}
