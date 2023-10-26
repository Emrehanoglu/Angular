import { ToDoItem } from "./todoitem"

export class Model{
    name : string
    items : ToDoItem[]

    constructor(){
        this.name = "Emre"
        this.items = []
    }
}