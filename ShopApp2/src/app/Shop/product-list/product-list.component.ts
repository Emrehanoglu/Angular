import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/cart.model';
import { Product } from 'src/app/Model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products:Product[]=[]
  public selectedProduct? : Product | null
  constructor(private cartService:Cart,private router:Router) { }

  ngOnInit(): void {
  }
  hideDetails(){
    this.selectedProduct = null
  }

  displayDetails(product:Product){
    this.selectedProduct = product
  }

  addProductToCart(product:Product){
    this.cartService.addItem(product)
    this.router.navigateByUrl('/cart')
}
}
