import { HttpClient, HttpHeaders } from "@angular/common/http"
import {Injectable} from "@angular/core"
import { Observable } from "rxjs"
import { Movie } from "./movie"
import { catchError, delay, map, tap } from "rxjs/operators";
import { MyList } from "./myList";

@Injectable() /* bu service 'i kullanacağım componentin ctor 'unda dahil edip kullanabilmem için */

export class MovieService{

    url = 'http://localhost:3000/movies'
    url_firebase = 'https://angular-movie-app-c3aaf-default-rtdb.firebaseio.com/'

    constructor(private http:HttpClient){}

    getMovies(categorId:number) : Observable<Movie[]>{
        return this.http.get<Movie[]>(this.url_firebase + "movies.json").pipe(
            map(response => { /* map ile bana gelen objeyi manipüle edeceğim */
                const movies: Movie[] = []

                for(const key in response){
                    if(categorId){ //bir categoryId gelmişse
                        if(categorId === response[key].categoryId){
                            /* seçtiğim kategori ile firebase 'den bana dönen filmler içerisindeki kategorilerden uyuşan varsa */
                            movies.push({...response[key], id:key}) 
                        }
                    } else{
                        movies.push({...response[key], id:key})
                    }                     
                    /* 
                        ...response[key] şu anlama geliyor, bana gelen respone içerisindeki elemanları yine aynı şekilde al, fakat 
                        ikinci parametre id 'ye farklı bir değer ataması yapacağımı söylüyorum.  
                    */
                }
                return movies
            }),
            delay(500)
        )
    }

    addToMyList(item:MyList) : Observable<MyList>{
        return this.http.post<MyList>(this.url_firebase + "users/" + item.userId + "/list/" + item.movieId + ".json",{
            dateAdded: new Date().getTime() /* film eklendiğinde tarih parametresi de olsun */
        }).pipe(
            tap(data => console.log(data)) /* gelen datayı console üzerinde okuyalım */
        )
    }

    removeFromMyList(item:MyList):Observable<MyList>{
        return this.http.delete<MyList>(this.url_firebase + "users/" + item.userId + "/list/" + item.movieId + ".json").pipe(
            tap(data => console.log(data))
        )
    }

    getMyList(userId:string):Observable<string[]>{
        return this.http.get<string[]>(this.url_firebase + "users/" + userId + "/list.json").pipe(
            map(response => {
               const movies : string[] = []
               for(let key in response){
                movies.push(key)
               }
               return movies
            })
        )
    }

    getMovieById(movieId:string):Observable<Movie>{
        return this.http.get<Movie>(this.url_firebase + 'movies/' + movieId + '.json').pipe(
            delay(500)
        )
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