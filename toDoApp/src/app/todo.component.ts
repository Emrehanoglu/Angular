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

    addItem(txtItem:any){
        if(txtItem != ""){
            this.model.items.push({description:txtItem , action:"no"})
        }else{
            alert("Bilgi Giriniz")
        }
    }

    getName(){
        return this.model.name
    }

    getItems(){
        return this.model.items
    }
}