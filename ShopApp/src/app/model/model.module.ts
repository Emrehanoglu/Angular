import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { RestService } from "./rest.service";
import { ProductRepository } from "./product.repository";
import { CategoryRepository } from "./category.repository";

@NgModule({
    imports: [
        HttpClientModule /* http ile api servisine req gonderebilmek için bu module 'ü ekledim */
    ],
    providers:[ /* serv,sler burada olacak */
        RestService,
        ProductRepository,
        CategoryRepository
    ]
})

export class ModelModule{}