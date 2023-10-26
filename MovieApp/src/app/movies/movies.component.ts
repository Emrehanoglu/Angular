import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movies = [
    {id:1, title:"film 1", description: "film 1 acıklama", imageUrl: "1.jpeg"},
    {id:2, title:"film 2", description: "film 2 acıklama", imageUrl: "2.jpeg"},
    {id:3, title:"film 3", description: "film 3 acıklama", imageUrl: "3.jpeg"},
    {id:4, title:"film 4", description: "film 4 acıklama", imageUrl: "4.jpeg"}
  ]

}
