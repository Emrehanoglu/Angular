import { Component } from "@angular/core";
import { ToDoItem } from "./todoitem";
import { Model } from "./model";

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class ToDoComponent{

    constructor() { }

    model = new Model()

    // private name = "Emre"
    // // items = ["item1","item2","item3"]
    // items:ToDoItem[] = [
    //     // {description : "Kahvaltı",action : "Yes"},
    //     // {description : "Spor",action : "Yes"},
    //     // {description : "Alışveriş",action : "No"}
    //     // new ToDoItem("Kahvaltı","Yes"),
    //     // new ToDoItem("Spor","Yes"),
    //     // new ToDoItem("KaAlışverişhvaltı","No")
    // ]

    getName(){
        return this.model.name
    }

    getItems(){
        return this.model.items
    }
}