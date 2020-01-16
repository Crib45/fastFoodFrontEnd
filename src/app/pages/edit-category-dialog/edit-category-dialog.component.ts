import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {

  dialogType: string = null;
  category = { id: null, categoryName: null, restaurantId: null };
  returnMessage: string;
  id: number;

  constructor(private dialogRef: MatDialogRef<EditCategoryDialogComponent>, private service: BackendService,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dialogType = data.dialogType;
    if (this.dialogType != null && this.dialogType != 'create') {
      this.category = data.category
    }
    else {
      this.category.restaurantId = data.restaurantId;
    }
  }

  ngOnInit() {
  }

  saveCategory(categoryName, id, restaurantId) {
    console.log(categoryName);
    console.log(id);
    console.log(restaurantId);
    this.service.saveCategory(categoryName, id, restaurantId).subscribe(data => {
      this.returnMessage = data;
    })
  }


}
