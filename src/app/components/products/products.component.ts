import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // @Input() products! : IProduct[] ;
   products! : IProduct[] ;

  // productDetail!: IProduct;
  
  
  
  isStatus: boolean = false;
  componentName: string= "Product component";
  productName: string = "";


  constructor(
    private productService : ProductService
  ) { 
    this.products = this.productService.getProductList();
  }

  ngOnInit(): void {
  }
  onHanlder(): void {
    // console.log(1);
    this.isStatus = !this.isStatus
  }
  // onHandlerDelete(id:number): void {
  //   console.log("Delete id:"+id);
    
  //   this.products = this.products.filter(product => product.id !== id)
  // }
  // onHandlerEdit(product:IProduct):void {
  //   console.log(product);
  //   this.productDetail = product
  // }
}
