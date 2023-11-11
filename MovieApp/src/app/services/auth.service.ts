import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/AuthResponse';
import { tap } from 'rxjs/operators';
import { User } from '../models/user';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' /* root sayesinde service global tanımlanmış olacak */
})
export class AuthService {
  api_key ='AIzaSyC6b9NVM7YkhAkjVu5cJ5YkI1LU4WmikP4'
  /* user = new Subject<User>() */ /* subject ' de bir observable nesnedir, daha özelleştirilmiş halidir. */
  user = new BehaviorSubject<User>(null) 

  constructor(private http:HttpClient, private route:Router) { }

  signUp(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true /* true gönderilmeli. Firebase sitesinde bu bilgi var zaten, böyle gönderilmeli diyor. */
    }).pipe(
      tap(response => {
        this.handleAuthentication(response.email,response.localId,response.idToken,+response.expiresIn) /* + ile string to number yaptım */
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
        this.handleAuthentication(response.email,response.localId,response.idToken,+response.expiresIn) /* + ile string to number yaptım */
      })
    )
  }
  handleAuthentication(email:string,userId:string,token:string,expiresIn:number){
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000)
        const user = new User(email,userId,token,expirationDate)
        this.user.next(user) 
        /* projedeki herhangi bir fonksiyonda subscribe olunan data içerisinde, gözlemciler aracılığı ile user
        bilgilerine ulaşabiliyor olacağız. subscibe olunan kısımı gözlemci olarak anlayabilirsin. Sonucta bir akış üzerindeki
        datayı alıp inceliyoruz orada, gözlemliyoruz. */

        localStorage.setItem("user",JSON.stringify(user)) /* user bilgisini direk olarak saklayamam, string şeklinde saklamam gerekiyor */
  }
  autoLogin(){
    const user = JSON.parse(localStorage.getItem("user")) /* user key i altındaki bilgileri aldım */
    if(!user){
      return
    }
    const loadedUser = new User(
      user.email,
      user.id,
      user._token,
      new Date(user._tokenExpirationDate)
    )
    if(loadedUser.token){
      this.user.next(loadedUser)
    }
  }
  logout(){
    this.user.next(null)
    localStorage.removeItem("user") /* LS içerisinde user key'i altında tutulan veriler silinsin. */
    this.route.navigate(['/auth'])
  }
  
}
