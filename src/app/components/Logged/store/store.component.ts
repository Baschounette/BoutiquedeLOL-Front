import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { __param, __values } from 'tslib';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public store: Product[] = [];
  public finalPrice: number = 0;
  public totalChampion: number = 0;
  public deleteStore = false;
  public validateStore = false;
  public oneElement: number = 0;


  constructor(private productService: ProductService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.store = JSON.parse(this.cookieService.get('Panier'));
    this.calculTotalChampion()
    this.calculTotalPrice()
  
  }

  calculTotalPrice(){
    this.finalPrice = 0;
    this.store.forEach(element => this.finalPrice = this.finalPrice + element.price)
  }
  
  calculTotalChampion(){
    this.totalChampion = 0;
    this.store.forEach(element => this.totalChampion = this.totalChampion + 1)
  }

  deleteStoreButton() {
    this.deleteStore = true;
  }

  validateStoreButton() {
    this.validateStore = true;
  }

  deleteChampion(product: Product) {
    const index = this.store.indexOf(product, 0)
    this.store.splice(index, 1)
    this.cookieService.set('Panier', JSON.stringify(this.store), {expires: 0.041})
    this.calculTotalChampion();
    this.calculTotalPrice();
  }

  deleteStoreFunction(event: boolean) {
    this.deleteStore = event;
    this.cookieService.delete('Panier')
    this.store = [];
    this.finalPrice = 0;
    this.totalChampion = 0;
  }

  validateStoreFunction(event:boolean) {
    this.validateStore = event;
  }

  closeModales(event:boolean){
    this.deleteStore = event;
    this.validateStore = event;
  }

}
