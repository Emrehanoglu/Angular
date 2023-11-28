import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{
    private dataSource:SimpleDataSource
    private products:Product[]
    constructor(){
        this.dataSource = new SimpleDataSource()
        this.products = new Array<Product>
        this.dataSource.getProducts().forEach(x => this.products.push(x))
    }
    GetById(id: number): Product {
        return this.products.filter(x => x.id ==id)[0]
    }
    GetAll(): Product[] {
        return this.products
    }
    SaveProduct(product: Product): void {
        if(product.id==0 || product.id==null){
            product.id = this.generateId()
            this.products.push(product)
        }else{
            let index
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].id==product.id){
                    index = i
                }
            }
            this.products.splice(index,1,product)
        }
    }
    DeleteProduct(product: Product): void {
        let index
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].id==product.id){
                    index = i
                }
            }
        this.products.splice(index,1)
    }
    generateId():number{
        let key:number=1
        while(this.GetById(key)!=null){
            key++
        }
        return key
    }

}