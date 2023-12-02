import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/Model/category.model';
import { CategoryRepository } from 'src/app/Model/category.repository';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  public selectedCategory?:Category
  @Output() category=new EventEmitter<Category>()
  constructor(private categoryRepository:CategoryRepository) { }

  ngOnInit(): void {
  }
  
  get categories(): Category[]{
    return this.categoryRepository.getCategories()
  }
  changeCategory(newCategory?:Category){
      this.selectedCategory=newCategory
      this.category.emit(newCategory)
  }

}
