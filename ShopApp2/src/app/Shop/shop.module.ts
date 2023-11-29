import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "src/app/Model/model.module";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
    providers:[],
    imports:[
        ModelModule,
        BrowserModule,
        FormsModule
    ],
    declarations:[ShopComponent, NavbarComponent, ProductComponent, CategoryComponent],
    exports:[ShopComponent]
})
export class ShopModule{}