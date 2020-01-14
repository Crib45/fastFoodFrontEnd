import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  restaurant: any;

  constructor(private dialogRef: MatDialogRef<ViewOrdersComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.restaurant = data.restaurant;
  }

  ngOnInit() {
    console.log(this.restaurant)
  }




  close() {
    this.dialogRef.close();
  }

}
