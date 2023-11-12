import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies:Movie[], filterText:string): Movie[] {
    /* 
      Birinci inputum movie listesi olacak,
      İkinci inputum filtreleme yapacağım kelime/harf olacak,
      geriye yeni bir movies listesi döndürecek.
    */
   filterText = filterText.toLowerCase()
    return filterText? movies.filter((m: Movie) => m.title.toLowerCase().indexOf(filterText) !== -1 || 
    m.description.toLowerCase().indexOf(filterText)  !== -1) : movies
  }
}
