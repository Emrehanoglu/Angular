import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers:[CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories : Category[]
  model : any = {
    categoryId: ''
  }

  constructor(private categoryService:CategoryService, private movieService:MovieService, private router:Router, private alertify:AlertifyService) { }

  ngOnInit(): void { /* ekran ilk açılırken yanı daha butona basmadım post işlemi yapmadım, bir nevi HttpGet gibi düşün */
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  movieForm = new FormGroup({
    title: new FormControl('film adı'),
    description: new FormControl('acıklama'),
    imageUrl: new FormControl('1.jpeg'),
    categoryId: new FormControl('1')
  })  

  clearForm(){
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: ''
    })
  }

  createMovie(){    
    const movie = {
      id:0,
      title: this.model.title,
      description : this.model.description,
      imageUrl: this.model.imageUrl,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: this.model.categoryId
    }

    this.movieService.createMovie(movie).subscribe(data => {
      this.router.navigate(['/movies'])
    })
  }

}
