import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponse{ /* http sonucunda bana döncek olan bilgilerin şablonu */
  idToken:string,
  email:string,
  refreshToken:string,
  expiresIn:string,
  localId:string
}

@Injectable({
  providedIn: 'root' /* root sayesinde service global tanımlanmış olacak */
})
export class AuthService {
  url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC6b9NVM7YkhAkjVu5cJ5YkI1LU4WmikP4'

  constructor(private http:HttpClient) { }

  signUp(email:string,password:string){
    return this.http.post<AuthResponse>(this.url,{
      email:email,
      password:password,
      returnSecureToken:true /* true gönderilmeli. Firebase sitesinde bu bilgi var zaten, böyle gönderilmeli diyor. */
    })
  }
}
