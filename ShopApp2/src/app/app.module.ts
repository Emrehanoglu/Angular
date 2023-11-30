import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopModule } from './Shop/shop.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartDetailComponent } from './Shop/cart-detail/cart-detail.component';
import { ShopComponent } from './Shop/shop.component';
import { CheckoutComponent } from './Shop/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ShopModule,
    RouterModule.forRoot([
      {path:'shop', component:ShopComponent},     
      {path:'checkout', component:CheckoutComponent},     
      {path:'cart', component:CartDetailComponent},     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
