import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ /* decorator */
    name : 'summary' /* summary ifadesi ile bu pipe 'ımı çağırıyor olacağım */
})

export class SummaryPipe implements PipeTransform{ /* PipeTransform metodunu mutlaka implemente ediyoruz */

    transform(value: string, limit ?: number) {
        /* value : gönderdiğim description bilgisi */
        /* limit : sınırlandırılacak karakter uzunluğu bilgisi */
        if(!value) return null

        limit = limit? limit:20 /* limit tanımlanmışsa kullan, tanımlanmamışsa 20 değeri default kullanılsın */

        if(limit > value.length){
            return value
        }
        return value.substring(0,limit) + '...'
    }
}