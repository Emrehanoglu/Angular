"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array; /* ProductService çağırıldığında içi boş bir liste oluşsun */
        this.dataSource.getProducts().forEach(function (x) { return _this.products.push(x); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (x) { return x.id == id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) { /* ekleme */
            product.id = this.generateId();
            console.log(product.id);
            this.products.push(product);
        }
        else { /* güncelleme */
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id == product.id) {
                    index = i; /* gelen product bilgisi products listem içerisindeki index numarasını buldum */
                }
            }
            this.products.splice(index, 1, product);
            /* bulduğum indexten itibaren 1 eleman sildi yani kendisini sildim ve gelen product bilgisini ekledim.
            splice 'ın 3. parametresi ekleme yapmak için kullanılıyor.*/
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = 0;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == product.id) {
                index = i; /* gelen product bilgisi products listem içerisindeki index numarasını buldum */
            }
        }
        if (index > 0) {
            this.products.splice(index, 1); /* splice 'ın 2. parametresi silme işlemi için kullanılıyor */
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
