import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/Products';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category:ICategory = {
    name:""
  }
  constructor(
    private categoryService: CategoryService,
    private route: Router,
    private activateRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
     // lấy id trên url
     const id = this.activateRoute.snapshot.paramMap.get('id');
     console.log(id);
     
     // nếu có id thì call service get product để thấy tt trả về form
     this.categoryService.getCategory(id).subscribe((data) => {
         this.category = data
     })
  }

  onSubmit(){

    const id = this.activateRoute.snapshot.paramMap.get("id");
    if (id) {
       // call services edit product
      // nếu thành công thì trả về sản phẩm vừa cập nhật xong
      this.categoryService.editCategory(this.category).subscribe((data) => {
        console.log(data);
         // chuyển hướng route
         this.route.navigateByUrl('admin/category/list')
      })
    }

    this.categoryService.addCategory(this.category).subscribe(data => {
      alert("Add Category Successfully")
      // chuyển hướng route
      this.route.navigateByUrl("admin/category/list");
    })
  }

}
