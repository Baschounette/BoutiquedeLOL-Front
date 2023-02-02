import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public store: Product[] = [];
  public finalPrice: number = 0;
  public totalChampion: number = 0;

  constructor(private productService: ProductService, private cookieService: CookieService) { }
  
  ngOnInit(): void {
    this.store = JSON.parse(this.cookieService.get('Panier'));
    this.store.forEach(element => this.finalPrice = this.finalPrice + element.price)
    this.store.forEach(element => this.totalChampion = this.totalChampion + 1)
  }

}
