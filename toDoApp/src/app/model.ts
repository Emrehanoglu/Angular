import { ToDoItem } from "./todoitem"

export class Model{
    name : string
    items : ToDoItem[]

    constructor(){
        this.name = "Emre"
        this.items = [
            {description : "Kahvaltı",action : true},
            {description : "Spor",action : true},
            {description : "Alışveriş",action : false}
        ]
    }
}