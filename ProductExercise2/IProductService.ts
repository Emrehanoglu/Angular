import { Product } from "./Product";

export interface IProductService{
    GetById(id:number):Product
    GetAll():Array<Product>
    SaveProduct(product:Product):void
    DeleteProduct(product:Product):void
}