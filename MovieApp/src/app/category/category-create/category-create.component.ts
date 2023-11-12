import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers: [CategoryService]
})
export class CategoryCreateComponent implements OnInit {

  constructor(private categoryService:CategoryService, private router:Router) { }
  /* router 'ı navigate yanı yonlendırme yapacağım için ekledim */
  ngOnInit(): void {
  }
  
  createCategory(name:string){
    const category: Category={
      name: name
    }

    this.categoryService.createCategory(category).subscribe(data => {
      console.log(data),
      this.router.navigate(['/']) /* ana sayfaya yonlendirdim */
    })
  }
}
