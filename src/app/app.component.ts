import { Component } from '@angular/core';
import data from './data';
import { IProduct } from './models/Products';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private productService: ProductService) { }
  // productList: IProduct[] = data;

  // onHandleAdd(product:any){
  //   console.log(product);
  //   // this.productList.push(product)
  //   this.productService.addProduct(product).subscribe(() => {
        
  //   })
  // }
 
}
