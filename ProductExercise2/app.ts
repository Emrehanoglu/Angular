import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService()

let result1
result1 = _productService.GetAll()
console.log(result1)

let result2 
result2 = _productService.GetById(2)
console.log(result2)

let result3:Product=new Product()
result3.name="Monster"
result3.price=12332
result3.category="Bilgisayar"
_productService.SaveProduct(result3)
result1 = []
result1 = _productService.GetAll()
console.log(result1)

let result4 = new Product()
result4.id=3
result4.name="Vestel4404"
result4.price=20212
result4.category="Televizyon"
_productService.SaveProduct(result4)
result1 = []
result1 = _productService.GetAll()
console.log(result1)

let result5 = new Product()
result5.id = 2
_productService.DeleteProduct(result5)
result1 = []
result1 = _productService.GetAll()
console.log(result1)
