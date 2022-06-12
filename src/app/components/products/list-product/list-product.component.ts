import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/models/Products';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products! : IProduct[] ;
  isStatus: boolean = false;
  constructor( 
    private productService : ProductService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.showProducts();
  }
  onHanlder(): void {
    // console.log(1);
    this.isStatus = !this.isStatus
  }

  showProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data
    })
  }

  remove(id:any){
      const data = confirm("Bạn có chắc muốn xóa sp này ?");
      if (data) {
        this.productService.deleteProduct(id).subscribe(data => {
        this.products = this.products.filter(item => item.id !== id)
          alert("Delete successfully");
          // chuyển hướng route
          this.route.navigateByUrl('/admin/product/list')
        })
      }
  
  }
}
