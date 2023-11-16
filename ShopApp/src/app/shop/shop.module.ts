import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
    providers:[], /* service tanımlamaları shopmodule içerisinde yok, modelmodule içerisinde aldığımız için burada ekstra bir tanıma gerek yok */
    imports:[ /* module eklemeleri burada yapılır */
        ModelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, ProductListComponent, CategoryListComponent],/* module içerisinde component tanımı var ise burada eklenir */
    exports:[ShopComponent,CartDetailComponent, CheckoutComponent] /* module içerisinde component tanımı var ise buradan dışarıya açılır */
})

export class ShopModule{}