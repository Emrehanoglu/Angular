import { Component } from "@angular/core";
import { ToDoItem } from "./todoitem";
import { Model } from "./model";

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})

export class ToDoComponent{

    displayAll : boolean = false

    constructor() { }

    model = new Model()

    addItem(txtItem:any){
        if(txtItem != ""){
            this.model.items.push({description:txtItem , action:false})
        }else{
            alert("Bilgi Giriniz")
        }
    }

    getName(){
        return this.model.name
    }

    getItems(){
        if(this.displayAll === true){
            return this.model.items
        }else{
            return this.model.items.filter(item => !item.action)
        }
    }

    displayCount(){
        return this.model.items.filter(item => item.action).length
    }
}