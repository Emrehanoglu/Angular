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
    inputText : string = ""

    constructor() { }

    model = new Model()

    addItem(){
        if(this.inputText != ""){
            this.model.items.push({description:this.inputText , action:false})
            this.inputText = ""
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

    getBtnClasses(){
        return {
            'disabled' : this.inputText.length==0, 
            'btn-secondary' : this.inputText.length==0,
            'btn-primary' : this.inputText.length > 0
        }
    }
}