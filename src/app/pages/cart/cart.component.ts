import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { MatTableDataSource } from '@angular/material';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price', 'removeOrder'];
  dataSource = new MatTableDataSource<any>([]);
  cartMessage: string;
  restaurant;
  date;
  notes: string = '';
  foodOrderList = [];
  returnMessage;
  userInfo;
  status: string = 'InProgress'
  orderId;
  constructor(private cartService: CartService, private service: BackendService) { }

  ngOnInit() {
    this.getCart();
    this.date = new Date();
    this.getUser();
  }

  removeItem(item) {
    this.cartMessage = this.cartService.removeFromCart(item);
    this.getCart()
  }

  getCart() {
    this.foodOrderList = this.cartService.getCartItems();
    console.log(this.foodOrderList)
    this.dataSource.data = this.foodOrderList;
    if (this.dataSource.data[0] != undefined) {
      this.restaurant = this.dataSource.data[0].categoryId.restaurantId;
    }
  }

  saveOrder() {
    this.service.saveOrder(this.restaurant, this.date, this.notes, this.status, this.userInfo, this.foodOrderList).subscribe(data => {
      this.orderId = data;
      console.log(this.orderId)
      if (this.orderId != null) {
        for (let i = 0; i < this.foodOrderList.length; i++) {
          this.service.saveFoodOrder(this.orderId, this.foodOrderList[i]).subscribe(data => {
            this.returnMessage = data;
          })
        }
      }
    })
  }

  cancelOrder() {
    this.cartMessage = this.cartService.resetCart();
    this.getCart();
  }

  getUser() {
    this.service.getUserInfo().subscribe(data => {
      this.userInfo = data;
    })
  }
}
