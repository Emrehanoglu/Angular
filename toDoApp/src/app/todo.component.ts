import { Component } from "@angular/core";

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class ToDoComponent{

    constructor() { }

    private name = "Emre"
    // items = ["item1","item2","item3"]
    items = [
        {id:1 ,description : "Kahvaltı",action : "Yes"},
        {id:2 ,description : "Spor",action : "Yes"},
        {id:3 ,description : "Alışveriş",action : "No"}
    ]

    getName(){
        return this.name
    }
}