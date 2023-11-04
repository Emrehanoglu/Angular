import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/AuthResponse';

@Injectable({
  providedIn: 'root' /* root sayesinde service global tanımlanmış olacak */
})
export class AuthService {
  api_key ='AIzaSyC6b9NVM7YkhAkjVu5cJ5YkI1LU4WmikP4'

  constructor(private http:HttpClient) { }

  signUp(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true /* true gönderilmeli. Firebase sitesinde bu bilgi var zaten, böyle gönderilmeli diyor. */
    })
  }
  login(email:string,password:string){
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.api_key,{
      email:email,
      password:password,
      returnSecureToken:true /* true gönderilmeli. Firebase sitesinde bu bilgi var zaten, böyle gönderilmeli diyor. */
    })
  }
}
