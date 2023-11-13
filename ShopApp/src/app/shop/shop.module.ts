import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    providers:[], /* service tanımlamaları shopmodule içerisinde yok, modelmodule içerisinde aldığımız için burada ekstra bir tanıma gerek yok */
    imports:[ /* module eklemeleri burada yapılır */
        ModelModule,
        BrowserModule,
        FormsModule
    ],
    declarations: [ShopComponent, NavbarComponent],/* module içerisinde component tanımı var ise burada eklenir */
    exports:[ShopComponent] /* module içerisinde component tanımı var ise buradan dışarıya açılır */
})

export class ShopModule{}