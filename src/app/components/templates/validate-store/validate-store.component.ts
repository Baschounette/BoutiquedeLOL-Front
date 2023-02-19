import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-validate-store',
  templateUrl: './validate-store.component.html',
  styleUrls: ['./validate-store.component.css']
})
export class ValidateStoreComponent implements OnInit {
 
 @Output() closeModale: EventEmitter<boolean> = new EventEmitter();
 @Output() validateStoreFunction: EventEmitter<boolean> = new EventEmitter();
  
  constructor(private productService: ProductService) { }
    
  ngOnInit(): void {
    
    }
  
  validateStore(){
    this.validateStoreFunction.emit(true);
    this.closeModale.emit(false);
  }

  closeModal(){
    this.closeModale.emit(false);
  }
}
