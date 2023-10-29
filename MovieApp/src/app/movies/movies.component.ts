import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  title : string
  movies : Movie[] = []
  popularMovies : Movie[] =[]  
  filteredMovies: Movie[] = []
  /* movieRepository: MovieRepository */

  filterText:string ="";
  errorMessage:any 

  constructor(private alertify:AlertifyService, private movieService:MovieService) { 
    /* this.movieRepository = new MovieRepository()
    this.movies = this.movieRepository.getMovies() */
    this.title = "Film Listesi"
    /* this.popularMovies = this.movieRepository.getPopularMovies() */
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data
      this.filteredMovies = this.movies
    },error => this.errorMessage = error)
  }

  onInputChange() {
    this.filteredMovies = this.filterText? this.movies.filter(m => m.title.indexOf(this.filterText)!==-1 
    || m.description.indexOf(this.filterText)!==-1): this.movies
  }

  addToList($event: any, movie: Movie){
    if($event.target.classList.contains('btn-primary')){
      $event.target.innerText = 'Listeden Çıkar'
      $event.target.classList.remove('btn-primary')
      $event.target.classList.add('btn-danger')
      this.alertify.success(movie.title + ' listene eklendi')
    }else{
      $event.target.innerText = 'Listeye Ekle'
      $event.target.classList.remove('btn-danger')
      $event.target.classList.add('btn-primary')
      this.alertify.error(movie.title + ' listeden çıkarıldı')
    }
  }
}
