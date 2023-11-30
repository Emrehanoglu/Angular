import { Injectable } from "@angular/core"
import { Cart } from "./cart.model"

@Injectable()
export class Order{
    public id: any
    public name: any
    public address: any
    public city: any
    public phone: any
    public email: any
    public isSent?: boolean=false

    constructor(public cart:Cart){}
    clearOrder(){ /* sipariş verildiği anda artık sipariş bilgileri sıfırlanabilir */
        this.id = null
        this.name = null
        this.address = null
        this.city = null
        this.phone = null
        this.email = null
        this.isSent = false
        this.cart.clear() /* sipariş verildiği anda sepet sıfırlanabilir */
    }
}