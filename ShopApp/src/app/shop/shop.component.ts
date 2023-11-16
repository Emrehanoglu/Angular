import { Component } from "@angular/core";
import { ProductRepository } from "../model/product.repository";
import { CategoryRepository } from "../model/category.repository";
import { Product } from "../model/product.model";
import { Category } from "../model/category.model";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
    selector:'shop',
    templateUrl:'shop.component.html'
})
export class ShopComponent{
    public selectedCategory?:Category
    /* sayfalama */
    public productsPerPage = 3 /* her sayfada bulunacak ürün sayısı */
    public selectedPage = 1 /* seçili sayfa */
    public selectedProducts:Product[] = []

    constructor(private productRepository:ProductRepository, private categoryRepository:CategoryRepository,
                private cart:Cart, private router: Router){}

    get products():Product[]{
        let index = (this.selectedPage - 1) * this.productsPerPage

        this.selectedProducts = this.productRepository.getProducts(this.selectedCategory)

        return this.selectedProducts
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
    addProductToCart(product:Product){
        this.cart.addItem(product)
        this.router.navigateByUrl('/cart')
    }
    changePageSize(size:number){
        this.productsPerPage = size /* sayfadaki ürün sayısı değişti */
        this.changePage(1) /* kullanıcı 1. sayfaya dönsün */
    }
}