import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-category-dialog',
  templateUrl: './edit-category-dialog.component.html',
  styleUrls: ['./edit-category-dialog.component.css']
})
export class EditCategoryDialogComponent implements OnInit {

  dialogType: string = null;
  category;

  constructor(private dialogRef: MatDialogRef<EditCategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dialogType = data.dialogType;
    if (this.dialogType != null && this.dialogType != 'create') {
      this.category = data.category
    }
  }

  ngOnInit() {
  }


}
