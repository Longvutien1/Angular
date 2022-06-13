import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { NzLayoutModule, } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { WebsiteLayoutComponent } from './components/layout/website-layout/website-layout.component';
import { AdminLayoutComponent } from './components/layout/admin-layout/admin-layout.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { HeaderComponent } from './components/inc/header/header.component';
import { FooterComponent } from './components/inc/footer/footer.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
// import { UserManagerComponent } from './components/auth/user-manager/user-manager.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { BlogComponent } from './components/blog/blog.component';
import { WorksComponent } from './components/works/works.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductDetailComponent,
    HomePageComponent,
    ListProductComponent,
    LoginComponent,
    RegisterComponent,
    WebsiteLayoutComponent,
    AdminLayoutComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    WorksComponent,
    // UserManagerComponent,
    // EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDividerModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzListModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
