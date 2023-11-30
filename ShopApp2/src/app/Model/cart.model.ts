import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable()

export class Cart{
    public items:CartItem[]=[]
    public itemCount:number=0
    public totalPrice:number=0
    addItem(product:Product,quantity:number=1){
        let item = this.items.find(item=>item.product.id==product.id)
        if(item !=undefined){
            item.quantity += quantity
        }else{
            this.items.push(new CartItem(product,quantity))
        }
        this.calculate()
    }
    updateQuantity(product:Product,quantity:number){
        let item = this.items.find(item => item.product.id==product.id)
        if(item!=undefined){
            item.quantity = quantity
        }
        this.calculate()
    }
    calculate(){
        this.totalPrice = 0
        this.itemCount = 0
        this.items.forEach(x => {
            this.itemCount += x.quantity
            this.totalPrice += (x.product.price! * x.quantity)
        })
    }
    removeItem(id:number){
        let item = this.items.findIndex(item => item.product.id==id)
        this.items.splice(item,1)
        this.calculate()
    }
    clear(){ /* kullanıcı sepeti boşaltmak isterse */
    this.items = []
    this.itemCount = 0
    this.totalPrice = 0
    }
}

export class CartItem{
    constructor(public product:Product,
        public quantity:number){}
}