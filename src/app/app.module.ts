import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './pages/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatCardModule } from '@angular/material';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantCategoriesComponent } from './pages/restaurant-categories/restaurant-categories.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FoodComponent } from './pages/food/food.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthInterceptor } from './http-interceptors/Auth-interceptor';
import { CartComponent } from './pages/cart/cart.component';
import { MatTableModule } from '@angular/material/table';
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
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'category/:id', component: RestaurantCategoriesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'food/:id', component: FoodComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [
    // {
    //   // provide: HTTP_INTERCEPTORS,
    //   // useClass: AuthInterceptor,
    //   // multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
