import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-favorites-dialog',
  templateUrl: './favorites-dialog.component.html',
  styleUrls: ['./favorites-dialog.component.css']
})
export class FavoritesDialogComponent implements OnInit {
  favorites;
  displayedColumns: string[] = ['restaurantName', 'restauranDescription', 'remove'];
  dataSource = new MatTableDataSource<any>([]);
  returnMessage: string;

  constructor(private service: BackendService) { }

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.service.getFavorites().subscribe(data => {
      this.favorites = data;
      this.dataSource.data = this.favorites;
      console.log(this.dataSource)
    })
  }
  removeFavorite(favoriteId) {
    this.service.removeFavorite(favoriteId).subscribe(data => {
      this.returnMessage = data;
      this.getFavorites();
    })
  }
}
