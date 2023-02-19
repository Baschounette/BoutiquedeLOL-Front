import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-delete-store',
  templateUrl: './delete-store.component.html',
  styleUrls: ['./delete-store.component.css']
})
export class DeleteStoreComponent implements OnInit  {


  @Output() closeModale: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteStoreFunction: EventEmitter<boolean> = new EventEmitter();

  constructor(private productService: ProductService, private cookieService: CookieService) { }
  
  ngOnInit(): void {
  
  }

  deleteStore(){
    this.deleteStoreFunction.emit(true);
    this.closeModale.emit(false);
  }

  closeModal(){
    this.closeModale.emit(false)
  }
}
