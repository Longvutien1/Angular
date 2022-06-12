import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/models/Products';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories!: ICategory[];
  constructor(
    private categoryService: CategoryService,
    private route:Router,
  ) { }

  ngOnInit(): void {
    this.showProduct();
  }

  showProduct(){
    this.categoryService.getCategoryList().subscribe(data => {
      this.categories = data
    })
  }

  remove(id:any){
    const data = confirm("Bạn có chắc muốn xóa loại hàng này ?");
    if (data) {
      this.categoryService.removeCategory(id).subscribe(data => {
      this.categories = this.categories.filter(item => item.id !== id)
        alert("Delete successfully");
        // chuyển hướng route
        this.route.navigateByUrl('/admin/category/list')
      })
    }

}
}
