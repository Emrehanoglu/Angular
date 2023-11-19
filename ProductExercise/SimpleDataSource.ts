import { Product } from "./Product";

export class SimpleDataSource{
    private products:Array<Product>
    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Iphone11","Telefon",11000),
            new Product(2,"Iphone12","Telefon",12000),
            new Product(3,"Iphone13","Telefon",13000),
            new Product(4,"Iphone14","Telefon",14000)
        )
    }
    getProducts(): Product[]{
        return this.products
    }
}