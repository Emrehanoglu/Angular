import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean=true
  loading:boolean=false
  error:string /* kullanıcıya göstereceğim hata mesajını tutacak */

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onToggleMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form:NgForm){
    if(form.invalid) {return} else{
      const email = form.value.email
      const password = form.value.password      
      let authResponse: Observable<AuthResponse>
      this.loading = true
      if(this.isLoginMode){
        authResponse = this.authService.login(email,password)
      }else{ /* register butonu ekranda olduğu zaman bu kodlar çalışmalı */
        authResponse = this.authService.signUp(email,password)
      }

      authResponse.subscribe(response => {
        console.log(response)
        this.loading = false
      },(err:HttpErrorResponse) => {
        if(err.error.error){
          switch(err.error.error.message){
            case "EMAIL_EXISTS":
              this.error = 'Bu email adresi kullanılmış'
              break
            case "INVALID_LOGIN_CREDENTIALS":
              this.error = 'Email veya Password bilgisi hatalı'
              break
          }
        }
        this.loading = false
        console.log(err)
      })

      form.reset() /* form üzerindeki inputları sıfırla */
    }
  }
}