import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/Model/order.model';
import { OrderRepository } from 'src/app/Model/order.repository';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public orderSent:boolean=false
  public submitted:boolean=false
  constructor(public order:Order,public orderRepository:OrderRepository) { }

  ngOnInit(): void {
  }

  submitOrder(form:NgForm){
    this.submitted=true
    if(form.valid){
      this.orderRepository.saveOrder(this.order).subscribe(data => {
        this.order.clearOrder()
        this.orderSent=true
        this.submitted=false
      })
    }
  }

}
