import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';


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
  userId: string
  /* movieRepository: MovieRepository */

  filterText:string ="";
  errorMessage:any 
  loading:boolean=false

  constructor(private alertify:AlertifyService, private movieService:MovieService, private activatedRoute:ActivatedRoute,
    private authService:AuthService) { 
    /* this.movieRepository = new MovieRepository()
    this.movies = this.movieRepository.getMovies() */
    this.title = "Film Listesi"
    /* this.popularMovies = this.movieRepository.getPopularMovies() */
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.userId = user.id
    })
    this.activatedRoute.params.subscribe(params => {
      this.loading=true /* film bilgilerini servisten almaya gitmeden önce ekranda gosterilmeye başlasın */

      this.movieService.getMovies(params["categoryId"]).subscribe(data => {
        this.movies = data
        this.filteredMovies = this.movies
        this.loading=false /* servisten bilgileri alıp geldikten sonra artık gösterilmesin */
      },error => {
        this.errorMessage = error
        this.loading=false
      })
    })    
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

      this.movieService.addToMyList({userId:this.userId, movieId:movie.id}).subscribe(() => this.alertify.success(movie.title + ' listene eklendi'))
    }else{
      $event.target.innerText = 'Listeye Ekle'
      $event.target.classList.remove('btn-danger')
      $event.target.classList.add('btn-primary')
      this.alertify.error(movie.title + ' listeden çıkarıldı')
    }
  }
}
