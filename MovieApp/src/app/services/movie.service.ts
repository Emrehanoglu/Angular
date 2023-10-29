import { HttpClient } from "@angular/common/http"
import {Injectable} from "@angular/core"
import { Observable } from "rxjs"
import { Movie } from "../models/movie"

@Injectable() /* bu service 'i kullanacağım componentin ctor 'unda dahil edip kullanabilmem için */

export class MovieService{

    url = "http://localhost:3000/movies"

    constructor(private http:HttpClient){}

    getMovies() : Observable<Movie[]>{
        return this.http.get<Movie[]>(this.url)
    }
}