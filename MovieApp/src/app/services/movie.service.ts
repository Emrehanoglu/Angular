import { HttpClient, HttpHeaders } from "@angular/common/http"
import {Injectable} from "@angular/core"
import { Observable } from "rxjs"
import { Movie } from "../models/movie"

@Injectable() /* bu service 'i kullanacağım componentin ctor 'unda dahil edip kullanabilmem için */

export class MovieService{

    url = 'http://localhost:3000/movies'
    url_firebase = 'https://angular-movie-app-c3aaf-default-rtdb.firebaseio.com'

    constructor(private http:HttpClient){}

    getMovies(categorId:number) : Observable<Movie[]>{
        let newUrl = this.url
        if(categorId){
            newUrl += '?categoryId=' + categorId
        }        
        return this.http.get<Movie[]>(newUrl)
    }

    getMovieById(movieId:number):Observable<Movie>{
        return this.http.get<Movie>(this.url + '/' + movieId)
    } 

    createMovie(movie:Movie): Observable<Movie>{
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json', /* json türünde bir veri göndereceğim diyorum */
                'Authorization':'Token' /* gönderdiğim token bilgisine göre sayfa bazlı yetkilendirme yapabiliyorum bu şekilde */
            })
        }
        return this.http.post<Movie>(this.url_firebase + '/movies.json', movie, httpOptions) /* 3. parametre yetkilendirmede kullanılıyor */
    }
}