import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public orderSent:boolean =  false
  public submitted:boolean = false /* validation için kullandım */

  constructor(public order:Order, private orderRepository:OrderRepository) { }

  ngOnInit(): void {}

  submitOrder(form:NgForm){
    this.submitted = true
    if(form.valid){
      this.orderRepository.saveOrder(this.order).subscribe(data => {
        this.order.clearOrder()
        this.orderSent=true
        this.submitted=false
      })
    }
  }
}
