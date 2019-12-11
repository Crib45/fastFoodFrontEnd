import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  idCategory: Number;
  listOfFood: Object;

  constructor(private service: BackendService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.idCategory = +this.route.snapshot.paramMap.get('id');
    this.getFood();
  }

  getFood() {
    this.service.getFoodByIdCategory(this.idCategory).subscribe(data => {
      this.listOfFood = data;
    });
  }
}
