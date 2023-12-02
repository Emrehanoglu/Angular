import { Component } from "@angular/core";
import { Category } from "src/app/Model/category.model";
import { Product } from "src/app/Model/product.model";
import { ProductRepository } from "../Model/product.repository";
import { CategoryRepository } from "../Model/category.repository";
import { Cart } from "../Model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector:'shop',
    templateUrl:'shop.component.html'
})

export class ShopComponent{
    public selectedCategory?:Category
    public productsPerPage:number = 3
    public selectedPage:number = 1
    public selectedProducts:Product[] = []
    constructor(private productRepository:ProductRepository){}
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