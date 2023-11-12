import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  //categories = ["macera","romantik","bilim kurgu","komedi"]

  categories : Category[] = []
  selectedCategory: Category = null

  constructor(private categoryService:CategoryService) { 
    /* this.categoryRepositories = new CategoryRepository()
    this.categories = this.categoryRepositories.getCategories() */
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data
    })
  }

  displayAll = true

  selectCategory(item? : Category){
    if(item){
      this.selectedCategory = item
      this.displayAll = false
    }else{
      this.selectedCategory = null
      this.displayAll = true
    }  
  }
}
