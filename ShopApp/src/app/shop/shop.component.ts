import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";

@Component({
    selector:'shop',
    templateUrl:'shop.component.html',
    styles: [`
        .pt-100 {padding-top:100px}
    `]
})
export class ShopComponent{
    public selectedCategory?:Category
    /* sayfalama */
    public productsPerPage = 3 /* her sayfada bulunacak ürün sayısı */
    public selectedPage = 1 /* seçili sayfa */

    constructor(private productRepository:ProductRepository, private categoryRepository:CategoryRepository){}

    get products():Product[]{
        let index = (this.selectedPage - 1) * this.productsPerPage
        return this.productRepository.getProducts(this.selectedCategory)
        .slice(index,index + this.productsPerPage)
        /* slice metodu ile belirtilen 1. parametre numarasından 2. parametre numarasına kadar dizi eleman sayısı döndürecek */
    }
    get categories():Category[]{
        return this.categoryRepository.getCategories()
    }
    get pageNumbers():number[]{
        return Array(Math.ceil(this.productRepository.getProducts(this.selectedCategory).length / this.productsPerPage))
        .fill(0)
        .map((a,i) => i+1)
    }
    changeCategory(newCategory?:Category){
        this.selectedCategory = newCategory
    }
    changePage(p: number){
        this.selectedPage = p
    }
}