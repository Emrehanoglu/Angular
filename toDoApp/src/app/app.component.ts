import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo App';

  getTitle(){
    return this.title
  }

  toDoItem = {
    description : 'kahvaltı',
    action : true
  }
}
