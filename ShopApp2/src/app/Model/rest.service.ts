import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import { Category } from "./category.model";
import { Order } from "./order.model";

@Injectable({
    providedIn:"root"
})

export class RestService{
    baseUrl:string = "http://localhost:3500/"
    constructor(private http:HttpClient){}
    getProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl + 'products')
      }
    getCategories():Observable<Category[]>{
        return this.http.get<Category[]>(this.baseUrl + 'categories')
    }
    saveOrder(order:Order):Observable<Order>{
        return this.http.post<Order>(this.baseUrl + 'orders',order)
    }
}