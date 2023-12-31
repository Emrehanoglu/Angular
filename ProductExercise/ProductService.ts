import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{
    private dataSource : SimpleDataSource
    private products:Array<Product>
    constructor(){
        this.dataSource=new SimpleDataSource()
        this.products = new Array<Product> /* ProductService çağırıldığında içi boş bir liste oluşsun */
        this.dataSource.getProducts().forEach(
            x => this.products.push(x) )
    } 

    getById(id: number): Product {
        return this.products.filter(x=>x.id==id)[0]
    }
    getProducts(): Product[] {
        return this.products
    }
    saveProduct(product: Product): void {
        if(product.id==0 || product.id==null){ /* ekleme */
            product.id = this.generateId()
            console.log(product.id)
            this.products.push(product)
        }
        else{ /* güncelleme */
            let index
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].id==product.id){
                    index = i /* gelen product bilgisi products listem içerisindeki index numarasını buldum */
                }
            }
            this.products.splice(index,1,product) 
            /* bulduğum indexten itibaren 1 eleman sildi yani kendisini sildim ve gelen product bilgisini ekledim.
            splice 'ın 3. parametresi ekleme yapmak için kullanılıyor.*/
        }
    }
    deleteProduct(product: Product): void {
        let index = 0
            for(let i=0;i<this.products.length;i++){
                if(this.products[i].id==product.id){
                    index = i /* gelen product bilgisi products listem içerisindeki index numarasını buldum */
                }
            }
        if(index>0){
            this.products.splice(index,1) /* splice 'ın 2. parametresi silme işlemi için kullanılıyor */
        }
    }
    private generateId():number{
        let key = 1
        while(this.getById(key) != null){
            key++
        }
        return key
    }
}