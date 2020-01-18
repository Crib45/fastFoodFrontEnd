import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule, MatDialogModule, MatIconModule } from '@angular/material';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantCategoriesComponent } from './pages/restaurant-categories/restaurant-categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodComponent } from './pages/food/food.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthInterceptor } from './http-interceptors/Auth-interceptor';
import { CartComponent } from './pages/cart/cart.component';
import { MatTableModule } from '@angular/material/table';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { ViewOrdersComponent } from './pages/restaurant/view-orders/view-orders.component';
import { EditCategoryDialogComponent } from './pages/edit-category-dialog/edit-category-dialog.component';
import { EditFoodDialogComponent } from './pages/edit-food-dialog/edit-food-dialog.component';
import { EditEmployeesComponent } from './pages/edit-employees/edit-employees.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    RestaurantCategoriesComponent,
    FoodComponent,
    ProfileComponent,
    CartComponent,
    RestaurantComponent,
    ViewOrdersComponent,
    EditCategoryDialogComponent,
    EditFoodDialogComponent,
    EditEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'category/:id', component: RestaurantCategoriesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'food/:id', component: FoodComponent },
      { path: 'cart', component: CartComponent },
      { path: 'restaurant/:id', component: RestaurantComponent }
    ])
  ],
  providers: [
    // {
    //   // provide: HTTP_INTERCEPTORS,
    //   // useClass: AuthInterceptor,
    //   // multi: true,
    // }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ViewOrdersComponent, EditCategoryDialogComponent, EditFoodDialogComponent, EditEmployeesComponent]
})
export class AppModule { }
