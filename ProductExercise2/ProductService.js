"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array;
        this.dataSource.getProducts().forEach(function (x) { return _this.products.push(x); });
    }
    ProductService.prototype.GetById = function (id) {
        return this.products.filter(function (x) { return x.id == id; })[0];
    };
    ProductService.prototype.GetAll = function () {
        return this.products;
    };
    ProductService.prototype.SaveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id == product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.DeleteProduct = function (product) {
        var index;
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == product.id) {
                index = i;
            }
        }
        this.products.splice(index, 1);
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.GetById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
