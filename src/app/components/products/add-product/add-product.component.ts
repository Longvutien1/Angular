import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/models/Products';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{ name: string, price: number }>();
  product:IProduct = {
    name: "",
    price: 0,
    status: true,
    image: "",
    desc: ""
  }
  constructor(
    private productService: ProductService,
    private route:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // lấy id trên url
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    
    // nếu có id thì call service get product để thấy tt trả về form
    this.productService.getProduct(id).subscribe((data) => {
        this.product = data
    })
  }
  onSubmit(){
    // console.log("submited");
    // console.log(this.product);
    // this.createProduct.emit(this.product)

    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
       // call services edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong
      this.productService.updateProduct(this.product).subscribe((data) => {
        console.log(data);
         // chuyển hướng route
         this.route.navigateByUrl('admin/product/list')
      })
    }else{
      // call service add product
      this.productService.addProduct(this.product).subscribe(data => {
        // chuyển hướng route
        this.route.navigateByUrl('admin/product/list')
      })
    }


  }
}
