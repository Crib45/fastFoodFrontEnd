import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  setCart() {
    localStorage.setItem('cart', null);
  }

  removeCart() {
    localStorage.removeItem('cart');
  }

  addToCart(item) {

  }

}
