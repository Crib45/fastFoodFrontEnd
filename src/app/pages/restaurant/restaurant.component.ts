import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatDialogConfig, MatDialog } from '@angular/material';
import { EditCategoryDialogComponent } from '../edit-category-dialog/edit-category-dialog.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  restaurantId;
  restaurant;
  categories;
  food;
  chosenCategory: string = '';
  restaurantForm = new FormGroup({
    restaurantName: new FormControl(''),
    restauranDescription: new FormControl(''),
    location: new FormControl(''),
    hoursEnd: new FormControl(''),
    phone: new FormControl(''),
    hoursStart: new FormControl('')
  });
  returnMessage: string;
  displayedColumns: string[] = ['categoryName', 'editCategory', 'deleteCategory'];
  dataSourceCategories = new MatTableDataSource<any>([]);

  displayedColumns1: string[] = ['foodName', 'editFood', 'deleteFood'];
  dataSourceFood = new MatTableDataSource<any>([]);



  constructor(private service: BackendService, private route: ActivatedRoute,
    private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    this.getRestaurantById();
    this.getCategoriesByIdRestaurant(this.restaurantId);
  }

  getRestaurantById() {
    this.service.getRestaurantById(this.restaurantId).subscribe(data => {
      this.restaurant = data;
      this.restaurantForm.patchValue({
        restaurantName: this.restaurant.restaurantName,
        restauranDescription: this.restaurant.restauranDescription,
        phone: this.restaurant.phone,
        location: this.restaurant.location,
        hoursEnd: this.restaurant.hoursEnd,
        hoursStart: this.restaurant.hoursStart
      });
    });
  }

  getCategoriesByIdRestaurant(idRestaurant) {
    this.service.getAllCategoryByIdRestaurant(idRestaurant).subscribe(data => {
      this.categories = data;
      this.dataSourceCategories.data = this.categories;
    })
  }

  checkAuthority() {

  }

  saveEdits() {
    this.restaurant.restaurantName = this.restaurantForm.get('restaurantName').value;
    this.restaurant.restauranDescription = this.restaurantForm.get('restauranDescription').value;
    this.restaurant.location = this.restaurantForm.get('location').value;
    this.restaurant.hoursEnd = this.restaurantForm.get('hoursEnd').value;
    this.restaurant.hoursStart = this.restaurantForm.get('hoursStart').value;
    this.restaurant.phone = this.restaurantForm.get('phone').value;;

    this.service.saveRestaurantEdits(this.restaurant).subscribe(data => {
      this.returnMessage = data;
    })
  }

  getFoodByIdCategory(idCategory) {
    console.log(idCategory)
    this.service.getFoodByIdCategory(idCategory).subscribe(data => {
      this.food = data;
      this.dataSourceFood.data = this.food;
    })
  }

  confirmDeleteCategory(category) {
    if (confirm("Are you sure you want to delete " + category.categoryName)) {
      this.service.deleteCategoryById(category.id).subscribe(data => {
        this.returnMessage = data;
        this.getCategoriesByIdRestaurant(this.restaurantId)
      })
    }
  }

  deleteFood(food) {
    if (confirm("Are you sure you want to delete " + food.foodName)) {
      this.service.deleteFoodById(food.id).subscribe(data => {
        this.returnMessage = data;
        this.getCategoriesByIdRestaurant(this.restaurantId)
      })
    }
  }

  editCategory(type: String, category, restaurantId) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      dialogType: type,
      category: category,
      restaurantId: restaurantId
    };

    this.dialog.open(EditCategoryDialogComponent, dialogConfig);
  }
}
