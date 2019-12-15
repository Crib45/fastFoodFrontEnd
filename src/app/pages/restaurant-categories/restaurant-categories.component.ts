import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-categories',
  templateUrl: './restaurant-categories.component.html',
  styleUrls: ['./restaurant-categories.component.css']
})
export class RestaurantCategoriesComponent implements OnInit {
  listOfCategories;

  constructor(private service: BackendService, private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.getCategoriesByIdRestaurant();
  }

  getCategoriesByIdRestaurant() {
    this.service.getCategoryByIdRestaurant(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.listOfCategories = data;
    });
  }
}
