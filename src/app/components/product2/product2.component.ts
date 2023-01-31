import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  public products!: Product[];
  public productsBuffer!: Product[];
  public filters: String = '';

  constructor(private productService: ProductService, private cookieService: CookieService) { }
  
  ngOnInit(): void {
      this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAllProductFromService().subscribe((res: Product[]) => {
      this.products = res;
      this.productsBuffer = res;
    })
  }

  searchByName(name: NgForm){
    this.productService.searchByNameFromService(name).subscribe((res: Product[]) => {
      this.products = res;
    })
    // this.products = this.productsBuffer; this.products = this.products.filter(function(filtre) {return filtre.name == name.value});
  }

  searchByPrice(price: NgForm){
    this.productService.searchByPriceFromService(price).subscribe((res: Product[]) => {
      this.products = res;
    })
  }

  searchByType(filter: String) {
    switch(filter) {
      case 'Mage': this.products = this.productsBuffer; this.products = this.products.filter((p) => p.type === 'Mage'); break;
      case 'Combattant': this.products = this.productsBuffer; this.products = this.products.filter((p) => p.type === 'Combattant'); break;
      case 'Assassin': this.products = this.productsBuffer; this.products = this.products.filter((p) => p.type === 'Assassin'); break;
      case 'Tank': this.products = this.productsBuffer; this.products = this.products.filter((p) => p.type === 'Tank'); break;
      case 'Support': this.products = this.productsBuffer; this.products = this.products.filter((p) => p.type === 'Support'); break;
      case 'Tireur': this.products = this.productsBuffer; this.products = this.products.filter((p) => p.type === 'Tireur'); break;
      case 'a_Z': this.products = this.productsBuffer; this.products = this.products.sort(function (a, b) {return a.name.localeCompare(b.name)}); break;
      case 'Z_a': this.products = this.productsBuffer; this.products = this.products.sort(function (a, b) {return b.name.localeCompare(a.name)}); break;
      case 'Asc': this.products = this.productsBuffer; this.products = this.products.sort(function (a, b) {return a.price - b.price}); break;
      case 'Desc': this.products = this.productsBuffer; this.products = this.products.sort(function (a, b) {return b.price - a.price}); break;
    }
  }
  
  addToStore(product: Product){
    this.cookieService.set('Panier', JSON.stringify(product), {expires: 0.0021})
  }
}
