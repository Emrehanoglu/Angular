import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers:[CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories : Category[]
  model : any = {}

  constructor(private categoryService:CategoryService, private movieService:MovieService, private router:Router, private alertify:AlertifyService) { }

  ngOnInit(): void { /* ekran ilk açılırken yanı daha butona basmadım post işlemi yapmadım, bir nevi HttpGet gibi düşün */
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  createMovie(form:NgForm){
    console.log(this.model)
    console.log(form)
    /* if(title.value==="" || description.value==="" || imageUrl.value==="" || categoryId.value==="-1"){
      this.alertify.error("Bir veya birden fazla alan doldurulmamış gözünüyor")
      return
    }
    if(title.value.length < 10){
      this.alertify.error("Title en az 10 karakterden oluşmalıdır")
      return
    }
    const extensions = ["jpeg","png","jpg"]
    const extension = imageUrl.value.split('.').pop() 
    if(extensions.indexOf(extension) === -1){
      this.alertify.error('İmageUrl girişi hatalı, lütfen tekrar deneyiniz')
      return 
    } 
    
    const movie = {
      id:0,
      title: title.value,
      description : description.value,
      imageUrl: imageUrl.value,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: categoryId.value
    }

    this.movieService.createMovie(movie).subscribe(data => {
      this.router.navigate(['/movies'])
    })*/
  }

}
