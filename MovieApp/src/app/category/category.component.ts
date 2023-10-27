import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  //categories = ["macera","romantik","bilim kurgu","komedi"]

  categories : Category[]
  categoryRepositories : CategoryRepository

  constructor() { 
    this.categoryRepositories = new CategoryRepository()
    this.categories = this.categoryRepositories.getCategories()
  }

  ngOnInit(): void {
  }

}
