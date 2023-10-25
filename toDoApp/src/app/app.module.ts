import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule, //uygulamanın tarayıcıda çalışması için gereken module
    FormsModule // NgModule ile birlikte çalışan yardımcı module
  ],
  providers: [],
  bootstrap: [ToDoComponent]
})
export class AppModule { }
