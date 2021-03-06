import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listOfRestaurants;
  returnMessage: Object;

  constructor(private service: BackendService) { }

  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    return this.service.getAllRestaurants().subscribe(data => {
      this.listOfRestaurants = data;
    });
  }

  addToFavorites(idRestaurant) {
    return this.service.addToFavorites(idRestaurant).subscribe(data => {
      this.returnMessage = data;
    });
  }
}
