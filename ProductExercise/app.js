"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result1, result2;
var p = new Product_1.Product(); /* ekleme */
p.name = "Iphone15";
p.category = "Telefon";
p.price = 15000;
_productService.saveProduct(p);
var x = new Product_1.Product();
x.id = 3;
x.name = "SamsungS8";
x.category = "Telefon";
x.price = 8000;
_productService.saveProduct(x);
result1 = _productService.getProducts(); /* tüm listeyi çekme */
result2 = _productService.getById(3); /* id ye göre ürün getirme */
console.log(result1);
console.log(result2);
var y = new Product_1.Product;
y.id = 4;
_productService.deleteProduct(y);
result1 = _productService.getProducts(); /* tüm listeyi çekme */
console.log(result1);
