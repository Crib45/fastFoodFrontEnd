import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from "@angular/material";
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  restaurant: any;
  orders;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'remove'];
  dataSource = new MatTableDataSource<any>([]);
  returnMessage;
  statusType = 'InProgress';
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


  saveOrder(element) {
    console.log(element)
    this.service.saveOrderChange(element.restaurantId, element.dateOfOrder, element.notesOrder, element.statusOrder, element.userId, element.id).subscribe(data => {
      this.returnMessage = data;
      this.getOrders(this.restaurant.id, this.statusType);
    })
  }

  close() {
    this.dialogRef.close();
  }

  test(asd) {
    console.log(asd)
  }
}
