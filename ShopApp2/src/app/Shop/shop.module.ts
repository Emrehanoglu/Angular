import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "src/app/Model/model.module";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { RouterModule } from "@angular/router";

@NgModule({
    providers:[],
    imports:[
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations:[ShopComponent, NavbarComponent, ProductComponent, CategoryComponent, CartSummaryComponent, CheckoutComponent, CartDetailComponent],
    exports:[ShopComponent]
})
export class ShopModule{}