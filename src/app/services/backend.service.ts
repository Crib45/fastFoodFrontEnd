import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getAllUsersEmployedAtByIdRestaurant(idRestaurant) {
    return this.http.get(this.url + "getAllUsersEmployedBy/" + idRestaurant, { responseType: 'json' });
  }

  getUserInfo() {
    let headers = this.getHeaders;
    return this.http.get(this.url + "profile", { headers });
    // return this.http.get(this.url + "user");
  }

  removeUserEmployedAt(user) {
    return this.http.post(this.url + "removeUserEmployedAt", user, { responseType: 'text' })
  }

  addUserEmployedAt(email, restaurantId) {
    return this.http.post(this.url + "addUserEmployedAt/" + restaurantId, email, { responseType: 'text' })
  }



  getAuthorizationToken() {
    return sessionStorage.getItem('token');
  }

  get getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + sessionStorage.getItem('token'));
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    return headers
  }
  // -- Food --
  getFoodByIdCategory(idCategory) {
    return this.http.get(this.url + "food/getAllByIdCategory/" + idCategory);
  }


  getCategoryByIdRestaurant(idRestaurant) {
    return this.http.get(this.url + "category/getAllByIdRestaurant/" + idRestaurant)
  }

  deleteFoodById(idCategory) {
    return this.http.delete(this.url + "food/" + idCategory, { responseType: 'text' });
  }
  saveFood(foodName, price, description, image, id, categoryId) {
    return this.http.post(this.url + "food/save", { foodName, price, description, image, id, categoryId }, { responseType: 'text' });
  }
  // -- Category --
  getCategoryById(idCategory) {
    return this.http.get(this.url + "category/" + idCategory);
  }

  getAllCategoryByIdRestaurant(idRestaurant) {
    return this.http.get(this.url + "category/getAllByIdRestaurant/" + idRestaurant);
  }
  deleteCategoryById(idCategory) {
    return this.http.delete(this.url + "category/" + idCategory, { responseType: 'text' });
  }

  saveCategory(categoryName, id, restaurantId) {
    return this.http.post(this.url + "category/save", { categoryName, id, restaurantId }, { responseType: 'text' });
  }
  //-------------
  isLoggedIn() {
    if (sessionStorage.getItem('token') == '' || sessionStorage.getItem('token') == null) {
      return false;
    }
    else return true;
  }

  saveUserEdits(user) {
    return this.http.post(this.url + 'save', user, { responseType: 'text' });
  }



  checkRestaurantAccess() {

  }
  //--Restaurant--
  saveRestaurantEdits(restaurant) {
    return this.http.post(this.url + 'restaurant/save', restaurant, { responseType: 'text' });
  }
  getUserRestaurants() {
    let headers = this.getHeaders;
    return this.http.get(this.url + 'restaurant/getAllOwnedByUser', { headers })
  }

  getEmployedAtRestaurant() {
    let headers = this.getHeaders;
    return this.http.get(this.url + 'restaurant/getByEmployee', { headers })
  }

  getRestaurantById(idRestaurant) {
    return this.http.get(this.url + 'restaurant/' + idRestaurant, { responseType: 'json' })
  }
  //---------------
}
