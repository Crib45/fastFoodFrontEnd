import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditEmployeesComponent } from '../edit-employees/edit-employees.component';
import { FavoritesDialogComponent } from '../favorites-dialog/favorites-dialog.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {


  constructor(private service: BackendService, private dialog: MatDialog) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.service.isLoggedIn();
  }
  test() {
    console.log(sessionStorage.getItem('token'))
  }

  logout() {
    this.service.logout();
  }

  openFavorites() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";

    this.dialog.open(FavoritesDialogComponent, dialogConfig);
  }

}
