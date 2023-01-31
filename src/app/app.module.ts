import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/Logged/add-product/add-product.component';
import { AdminboardComponent } from './components/Logged/adminboard/adminboard.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/Logged/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProfilComponent } from './components/Logged/profil/profil.component';
import { MyReservationComponent } from './components/Logged/my-reservation/my-reservation.component';
import { SupportComponent } from './components/Logged/support/support.component';
import { UsersComponent } from './components/Logged/users/users.component';
import { ReservationComponent } from './components/Logged/reservation/reservation.component';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { Product2Component } from './components/product2/product2.component';
import { UsersChangeComponent } from './components/templates/users-change/users-change.component';
import { DetailChangeComponent } from './components/templates/detail-change/detail-change.component';
import { StoreComponent } from './components/Logged/store/store.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProductsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    AdminboardComponent,
    SidebarComponent,
    ProfilComponent,
    MyReservationComponent,
    SupportComponent,
    UsersComponent,
    ReservationComponent,
    Product2Component,
    UsersChangeComponent,
    DetailChangeComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
