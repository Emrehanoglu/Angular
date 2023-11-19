import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService()
let result1 ,result2
let p = new Product() /* ekleme */
p.name="Iphone15"
p.category="Telefon"
p.price=15000
_productService.saveProduct(p)
let x = new Product()
x.id=3
x.name="SamsungS8"
x.category="Telefon"
x.price=8000
_productService.saveProduct(x)

result1 = _productService.getProducts(); /* tüm listeyi çekme */
result2 = _productService.getById(3) /* id ye göre ürün getirme */
console.log(result1)
console.log(result2)

let y = new Product
y.id = 4
_productService.deleteProduct(y)

result1 = _productService.getProducts(); /* tüm listeyi çekme */
console.log(result1)