import { Injectable } from '@angular/core';
import data from '../data';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct, IUser } from '../models/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = 'http://localhost:3000/products'
  constructor(private http: HttpClient) { }

  getProduct(id:any):Observable<IProduct>{
    // return data.find(item => item.id == id)
    return this.http.get<IProduct>(`${this.API_URL}/${id}`)
  }
  getProductList():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.API_URL)
  }
  addProduct(product:any){
    return this.http.post(`${this.API_URL}`, product)
  }
  updateProduct(product:any){
    return this.http.put(`${this.API_URL}/${product.id}`, product)
  }
  deleteProduct(id:number){
    return this.http.delete(`${this.API_URL}/${id}`)
  }
  
}

