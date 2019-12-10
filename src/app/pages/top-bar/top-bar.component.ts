import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {


  constructor(
    private service: BackendService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    if (sessionStorage.getItem('token') == '' || sessionStorage.getItem('token') == null) {
      return false;
    }
    else return true;
  }
  test() {
    console.log(sessionStorage.getItem('token'))
  }

  logout() {
    this.service.logout();
  }
}
