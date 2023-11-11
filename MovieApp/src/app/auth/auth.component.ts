import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode:boolean=true
  loading:boolean=false
  error:string /* kullanıcıya göstereceğim hata mesajını tutacak */

  constructor(private authService:AuthService, private router:Router) { }

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
        this.loading = false
        this.router.navigate(['/movies'])
      },err => {
        this.error = err
        this.loading = false
      })

      form.reset() /* form üzerindeki inputları sıfırla */
    }
  }
  closeDialog(){
    this.error = null
  }
}