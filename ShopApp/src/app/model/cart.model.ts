import { Injectable } from "@angular/core";
import { Product } from "./product.model";

@Injectable() /* service olarak kullanmak istediğim için Injectable olarak işaretledim */
export class Cart{ /* sepet içerisindeki ürünlerin listesinin bulunacağı class */
    public items:CartItem[]=[]
    public itemCount: number = 0 /* sepetteki toplam ürün sayısı */
    public total : number = 0 /* sepetteki ürünlerin toplam fiyatı */

    addItem(product:Product, quantity:number=1){ /* kullanıcı sepete ürün eklerken ürün bilgisi ve ürün adedi ile gelecek */
    /* kullanıcı daha once sepete ürünü eklemişmi kontrol edecez eğer eklemiş ise miktar bilgisini güncelleyebilecek 
    eklememiş ise yeni bir CartItem bilgisi oluşturacağız.*/
        let item = this.items.find(item => item.product.id == product.id)
        if(item != undefined){ /* ürün zaten sepette var ise */
            item.quantity += quantity      
        }else{
            this.items.push(new CartItem(product,quantity))
        }
        this.calculate()
    }

    updateQuantity(product:Product, quantity:number){
        let item = this.items.find(item => item.product.id == product.id)
        if(item != undefined){
            item.quantity += quantity
        }
        this.calculate()
    }

    calculate(){ /* sepet içerisindeli toplam ürün ve toplam fiyat bilgilerini günceller */
        this.itemCount = 0
        this.total = 0

        this.items.forEach(item => {
            this.itemCount += item.quantity
            this.total += (item.quantity * item.product.price!) /* ünlem burada price değerinin boş olmayacağının garantisi verir. */
        })
    }

    removeItem(id:number){ /* kullanıcı sepetten istediği bir ürünü silmek isterse */
        let index = this.items.findIndex(item => item.product.id == id)
        this.items.splice(index,1) /* splice : index den başla 2. parametredeki miktar kadar elemanı sil */
        this.calculate()
    }

    clear(){ /* kullanıcı sepeti boşaltmak isterse */
    this.items = []
    this.itemCount = 0
    this.total = 0
    }
}

export class CartItem{ /* sepetteki ürünlere ait özelliklerin bulunacağı, bir üründen kac tane var gibi bilgilerin olacağı class */
    constructor(public product:Product, 
                public quantity:number){} /* quantity : miktar, ürün sayısını tutacak */
}