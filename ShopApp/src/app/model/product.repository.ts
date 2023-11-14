import { Injectable, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { RestService } from "./rest.service";
import { Category } from "./category.model";

@Injectable()

export class ProductRepository implements OnInit{ /* ngOnInıt 'i eklememin nedeni ProductRepository çağırıldığı anda 
products bilgileni almak istemem, yanı herhangi bir yerden metot ile tetiklemeden. */
    private products:Product[] = []

    constructor(private restService:RestService){
        this.restService.getProducts().subscribe(data => this.products = data)
    }

    ngOnInit(): void {
    }

    getProduct(id:number): Product {
        return this.products.find(x => x.id === id)!
    }
    getProducts(category?:Category):Product[]{
        if(category){
            return this.products.filter(p => p.category == category?.name)
        }else{
            return this.products
        }        
    }
}