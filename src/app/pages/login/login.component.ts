import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: BackendService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    this.service.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.loginForm.controls["username"].value + ':' + this.loginForm.controls["password"].value)
        );

        console.log(sessionStorage.getItem('token'));
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.");
      }
    });
  }

}
