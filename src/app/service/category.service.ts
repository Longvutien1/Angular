import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/Products';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  API_URL = 'http://localhost:3000/categories'
  constructor( private http: HttpClient ) { }

  getCategory(id:any):Observable<ICategory>{
    return this.http.get<ICategory>(`${this.API_URL}/${id}`)
  }

  getCategoryList():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.API_URL)
  }

  addCategory(category:ICategory):Observable<ICategory>{
    return this.http.post<ICategory>(`${this.API_URL}`, category)
  }

  editCategory(category:ICategory):Observable<ICategory>{
    return this.http.put<ICategory>(`${this.API_URL}/${category.id}`, category)
  }

  removeCategory(id:any):Observable<ICategory>{
    return this.http.delete<ICategory>(`${this.API_URL}/${id}`)
  }
}
