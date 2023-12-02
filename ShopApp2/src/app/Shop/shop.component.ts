import { Component } from "@angular/core";
import { Category } from "src/app/Model/category.model";
import { Product } from "src/app/Model/product.model";
import { ProductRepository } from "../Model/product.repository";
import { ChangeDetectorRef  } from '@angular/core';

@Component({
    selector:'shop',
    templateUrl:'shop.component.html'
})

export class ShopComponent{
    public selectedCategory?:Category
    public productsPerPage = 3 /* her sayfada bulunacak ürün sayısı */
    public selectedPage = 1 /* seçili sayfa */
    public selectedProducts:Product[] = []

    constructor(private productRepository:ProductRepository,private  changeDetector: ChangeDetectorRef ){}
        
    ngAfterContentChecked(): void  {
        this.changeDetector.detectChanges();
    } 
    get products(): Product[]{
        let index = (this.selectedPage-1)
        this.selectedProducts = this.productRepository.getProducts(this.selectedCategory)
        return this.selectedProducts.slice(index,index+this.productsPerPage)
    }
    get pageNumbers():number[]{
        return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage))
        .fill(0)
        .map((a,i) => i+1)
    }
    changePage(p:number){
        this.selectedPage = p
    }
    changePageSize(size:number){
        this.productsPerPage = size
        this.changePage(1)
    }
    getCategory(category:Category){
        return this.selectedCategory = category
    }
}