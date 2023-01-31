import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddProductComponent } from './components/Logged/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/Logged/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { Product2Component } from './components/product2/product2.component';
import { UsersChangeComponent } from './components/templates/users-change/users-change.component';
import { DetailChangeComponent } from './components/templates/detail-change/detail-change.component';
import { StoreComponent } from './components/Logged/store/store.component';


const routes: Routes = [
  { path: 'homepage', component: HomepageComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'product2', component: Product2Component},
  { path: 'login', component: LoginComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: '', component: AppComponent},
  { path: 'usersChange', component: UsersChangeComponent},
  { path: 'detailChange', component: DetailChangeComponent},
  { path: 'store', component: StoreComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
