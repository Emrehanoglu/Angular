import { Injectable } from "@angular/core"
import { Order } from "./order.model"
import { RestService } from "./rest.service"
import { Observable } from "rxjs"

@Injectable()

export class OrderRepository{
    private orders:Order[] = []
    constructor(private restService:RestService){}
    saveOrder(order:Order):Observable<Order>{
        return this.restService.saveOrder(order)
    }
    getOrders():Order[]{
        return this.orders
    }
}