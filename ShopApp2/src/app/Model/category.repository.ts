import { Injectable, OnInit } from "@angular/core";
import { Category } from "./category.model";
import { RestService } from "./rest.service";

@Injectable()

export class CategoryRepository implements OnInit{
    private categories:Category[]=[]
    constructor(private restService:RestService){
        this.restService.getCategories().subscribe(data => this.categories = data)
    }
    ngOnInit(): void {}
    getCategory(id:number):Category{
        return this.categories.find(x => x.id===id)!
    }
    getCategories():Category[]{
        return this.categories
    }
}