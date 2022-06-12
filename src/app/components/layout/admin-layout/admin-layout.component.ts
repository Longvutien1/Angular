import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  products! : IProduct[] ;

  // productDetail!: IProduct;
  
  
  
  isStatus: boolean = false;
  componentName: string= "Product component";
  productName: string = "";


  constructor(
    private productService : ProductService
  ) { 
    // this.products = this.productService.getProductList();
    // this.showProducts()
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





  remove(id:any){
    console.log("delete"+id);
    this.productService.deleteProduct(id).subscribe(data => {
      this.products =  this.products.filter(item => item.id != id)
    });
  }

  // onHandleAdd(product:any){
  //   console.log(product);
  //   // this.productList.push(product)
  //   this.productService.addProduct(product).subscribe((data) => {
  //     // [...this.products, data]
  //     this.showProducts();
  //   })
  // }

}
