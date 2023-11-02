import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean=true

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onToggleMode(){
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(form:NgForm){
    if(form.invalid) {return} else{

      if(this.isLoginMode){
        console.log('login mode...')
      }else{ /* register butonu ekranda olduğu zaman bu kodlar çalışmalı */
        const email = form.value.email
        const password = form.value.password
        this.authService.signUp(email,password).subscribe(response => {
          console.log(response) /* bu noktada kayıt olma işlemi gerçekleşti burada kayıt olan kullanıcının bilgilerini görebilirim. */
        },err => { /* service hatalı dönerse err bilgisini yakala */
          console.log(err)
        })
      }
    }
  }
}
