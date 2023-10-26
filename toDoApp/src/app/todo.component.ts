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

    constructor() { 
        this.model.items =  this.getItemsFromLS()
    }

    model = new Model()

    addItem(){
        if(this.inputText != ""){
            let data = {description:this.inputText , action:false}
            this.model.items.push(data)

            let items = this.getItemsFromLS()
            items.push(data)             
            localStorage.setItem("items",JSON.stringify(items))

            this.inputText = ""
        }else{
            alert("Bilgi Giriniz")
        }
    }

    getItemsFromLS(){
        let items:ToDoItem[] = []

        let value = localStorage.getItem("items") //LS ye set ettiğim key bilgisi items' dı
        if(value != null){
            items = JSON.parse(value)
        }

        return items
    }

    onActionChanged(item:ToDoItem){
        let items = this.getItemsFromLS() //önce LS içerisindeki verileri alalım
        localStorage.clear() //LS 'yi temizleyelim, birazdan güncel halini set edicem zaten
        items.forEach(i => {
            if(i.description == item.description){
                i.action = item.action
            }
        })
        localStorage.setItem("items",JSON.stringify(items))
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