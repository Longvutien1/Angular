import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './components/layout/website-layout/website-layout.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { WorksComponent } from './components/works/works.component';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [

  {
    
    path:"admin",canActivate:[AuthGuard] ,component: AdminLayoutComponent,
    children:[
      {path:"", component: ListProductComponent},
      {path:"product/add", component:AddProductComponent},
      {path:"product/add/:id",component:AddProductComponent},
      {path:"product/list",component:ListProductComponent},

      // category
      {path:"category/list",component:ListCategoryComponent},
      {path:"category/add",component:AddCategoryComponent},
      {path:"category/add/:id",component:AddCategoryComponent},
    ]

  },
 
  {path:"", component: WebsiteLayoutComponent,
   children:[
    {path:"", component: HomePageComponent},
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
   ]
  },

  {path:"detailProduct/:id", component: ProductDetailComponent},
  {path:"blog", component: BlogComponent},
  {path:"work", component: WorksComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
