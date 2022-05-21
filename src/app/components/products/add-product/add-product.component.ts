import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product:{name:string, price: number} = {
    name: "",
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log("submited");
    console.log(this.product);
    this.createProduct.emit(this.product)
    
  }
}
