import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { RestService } from "./rest.service";
import { ProductRepository } from "./product.repository";
import { CategoryRepository } from "./category.repository";
import { Cart, CartItem } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
    imports: [
        HttpClientModule /* http ile api servisine req gonderebilmek için bu module 'ü ekledim */
    ],
    providers:[ /* servisler burada olacak */
        RestService,
        ProductRepository,
        CategoryRepository,
        Cart,
        Order,
        OrderRepository
    ]
})

export class ModelModule{}