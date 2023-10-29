import {Injectable} from "@angular/core"

declare let alertify : any

@Injectable() /* 
                Injectable olarak servisi işaretlemek önemli çünkü bunu yaparak ben bu service 'i component içerisinde 
                kullanacağım demiş oluyorum. İki şekilde service projeye dahil edebilirim. Birinicisi,
                @Injectable({
                    providedIn : 'root'
                })
                diyerek proje ayağa kalktığında service de oluşmuş olur. İkincisi,
                app.module.ts içerisinde providers kısmında dahil edebilirim.
                providers: [AlertifyService],
              */

export class AlertifyService{
    constructor(){}

    success(message : string){
        alertify.success(message)
    }
    error(message : string){
        alertify.error(message)
    }
    warning(message : string){
        alertify.warning(message)
    }
}