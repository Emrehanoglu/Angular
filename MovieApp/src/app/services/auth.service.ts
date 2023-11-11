import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/AuthResponse';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root' /* root sayesinde service global tanımlanmış olacak */
})
export class AuthService {
  api_key ='AIzaSyC6b9NVM7YkhAkjVu5cJ5YkI1LU4WmikP4'
  /* user = new Subject<User>() */ /* subject ' de bir observable nesnedir, daha özelleştirilmiş halidir. */
  user = new BehaviorSubject<User>(null) 

  constructor(private http:HttpClient) { }

  signUp(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true /* true gönderilmeli. Firebase sitesinde bu bilgi var zaten, böyle gönderilmeli diyor. */
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + Number(response.expiresIn)*1000)
        const user = new User(response.email,response.localId,response.idToken,expirationDate)
        this.user.next(user) 
        /* projedeki herhangi bir fonksiyonda subscribe olunan data içerisinde, gözlemciler aracılığı ile user
        bilgilerine ulaşabiliyor olacağız. subscibe olunan kısımı gözlemci olarak anlayabilirsin. Sonucta bir akış üzerindeki
        datayı alıp inceliyoruz orada, gözlemliyoruz. */
      })
    )
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true /* true gönderilmeli. Firebase sitesinde bu bilgi var zaten, böyle gönderilmeli diyor. */
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + Number(response.expiresIn)*1000)
        const user = new User(response.email,response.localId,response.idToken,expirationDate)
        this.user.next(user) 
        /* projedeki herhangi bir fonksiyonda subscribe olunan data içerisinde, gözlemciler aracılığı ile user
        bilgilerine ulaşabiliyor olacağız. subscibe olunan kısımı gözlemci olarak anlayabilirsin. Sonucta bir akış üzerindeki
        datayı alıp inceliyoruz orada, gözlemliyoruz. */
      })
    )
  }
}
