import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  foodOrderList = [];

  constructor() { }

  public resetCart() {
    this.foodOrderList = [];
    return "Cart canceled";
  }

  public removeFromCart(item) {
    for (let i = 0; i < this.foodOrderList.length; i++) {
      if (this.foodOrderList[i].id == item.id) {
        this.foodOrderList.splice(i, 1);
        break;
      }
    }
    return "removed item";
  }

  public addToCart(item) {
    this.foodOrderList.push(item);
    console.log(this.foodOrderList);
    return "added to cart";
  }

  public getCartItems() {
    return this.foodOrderList;
  }


}
