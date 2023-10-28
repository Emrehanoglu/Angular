import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title : string
  movies : Movie[]
  popularMovies : Movie[]  
  filteredMovies: Movie[]
  movieRepository: MovieRepository

  filterText:string ="";

  constructor() { 
    this.movieRepository = new MovieRepository()
    this.movies = this.movieRepository.getMovies()
    this.title = "Film Listesi"
    this.popularMovies = this.movieRepository.getPopularMovies()
    this.filteredMovies = this.movies
  }

  ngOnInit(): void {
  }

  onInputChange() {
    this.filteredMovies = this.filterText? this.movies.filter(m => m.title.indexOf(this.filterText)!==-1 
    || m.description.indexOf(this.filterText)!==-1): this.movies
  }
}
