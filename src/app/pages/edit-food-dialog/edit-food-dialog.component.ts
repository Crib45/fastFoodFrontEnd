import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-edit-food-dialog',
  templateUrl: './edit-food-dialog.component.html',
  styleUrls: ['./edit-food-dialog.component.css']
})
export class EditFoodDialogComponent implements OnInit {

  dialogType: string = null;
  food = { id: null, foodName: null, categoryId: null };;
  returnMessage: string;

  constructor(private dialogRef: MatDialogRef<EditFoodDialogComponent>, private service: BackendService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dialogType = data.dialogType;
    if (this.dialogType != null && this.dialogType != 'create') {
      this.food = data.food
    }
    else {
      this.food.categoryId = data.categoryId;
    }
  }

  ngOnInit() {

    console.log(this.food.categoryId)
  }

  saveFood(foodName, price, description, image, id, categoryId) {
    console.log(categoryId)
    this.service.saveFood(foodName, price, description, image, id, categoryId).subscribe(data => {
      this.returnMessage = data;
    })
  }

}
