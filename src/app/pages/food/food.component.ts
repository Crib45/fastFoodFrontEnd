import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  idCategory: Number;
  listOfFood: Object;
  chosenCategory: Object = { categoryName: '' };
  cartMessage: string;

  constructor(private service: BackendService, private route: ActivatedRoute,
    private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.idCategory = +this.route.snapshot.paramMap.get('id');
    this.getFood();
    this.getCategory();
  }

  getFood() {
    this.service.getFoodByIdCategory(this.idCategory).subscribe(data => {
      this.listOfFood = data;
    });
  }
  getCategory() {
    this.service.getCategoryById(this.idCategory).subscribe(data => {
      this.chosenCategory = data;
    });
  }
  isLoggedIn() {
    return this.service.isLoggedIn()
  }
  addToCart(food) {
    this.cartMessage = this.cartService.addToCart(food);
  }
}
