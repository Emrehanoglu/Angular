import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService] /* local bir service olduğu için eklemeliyim. */
})
export class MovieDetailsComponent implements OnInit {

  movie : Movie
  loading:boolean=false

  constructor(private movieService:MovieService, private activatedRoute:ActivatedRoute) { }
  /* 
    movieService içerisindeki getMovieById metodunu çağırabilmek için movieService parametresini, 
    url üzerindeki movieId bilgisini alabilmek için activatedRoute parametresini oluşturdum
  */
  
  ngOnInit(): void { /* MovieDetalisComponent çağırılmadan önce ngOnInit içerisindeki sorgu gonderilsin */
    this.activatedRoute.params.subscribe(params => {
      this.loading=true
      this.movieService.getMovieById(params["movieId"]).subscribe(data => {
        this.movie = data
        this.loading=false
      })
    })
  }
}
