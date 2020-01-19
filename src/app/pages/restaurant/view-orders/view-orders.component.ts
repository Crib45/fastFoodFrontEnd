import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { BackendService } from 'src/app/services/backend.service';
import { stat } from 'fs';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  restaurant: any;
  orders;

  constructor(private dialogRef: MatDialogRef<ViewOrdersComponent>, private service: BackendService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.restaurant = data.restaurant;
  }

  ngOnInit() {
    this.getOrders(this.restaurant.id, 'InProgress')

  }

  getOrders(restaurantId, status) {
    this.service.getAllOrderByIdRestaurantAndStatus(restaurantId, status).subscribe(data => {
      this.orders = data;
      console.log(this.orders)
    })
  }


  close() {
    this.dialogRef.close();
  }

}
