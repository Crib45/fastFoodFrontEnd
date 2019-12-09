import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  url = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  login(username, password) {
    return this.http.post(this.url + "login", { username, password });
  }

  logout() {
    sessionStorage.setItem('token', '');
    return this.http.get(this.url + "logout");
  }

  register(username, password, firstName, lastName, email, phone) {
    return this.http.post(this.url + "register", { username, password, firstName, lastName, email, phone });
  }

  getAllRestaurants() {
    return this.http.get(this.url + "restaurant");
  }

  getCategoryByIdRestaurant(idRestaurant) {
    return this.http.get(this.url + "category/" + idRestaurant)
  }
}
