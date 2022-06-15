import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Products';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
 
  
})
export class HomePageComponent implements OnInit {
  //  username:string = JSON.parse(String(localStorage?.getItem("user"))).user.username;
   products! : IProduct[] ;
  constructor(
    private productService: ProductService
  ) { }
  
  ngOnInit(): void {
    this.showProducts();
    // console.log(JSON.parse(String(localStorage?.getItem("user"))).user.username);
    
  }

  showProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data
    })
  }
  
}
