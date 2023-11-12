import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertifyService } from './services/alertify.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ErrorInterceptor } from './services/error.interceptor';
import { AuthInterceptor } from './services/auth.interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MoviesModule } from './movies/movies.module';

@NgModule({
  declarations: [ //components
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    AlertComponent,
    LoadingComponent
  ],
  imports: [  //modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MoviesModule
  ],
  providers: [
    AlertifyService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}, /* multi, birden fazla interceptor kullanmak için eklendi */
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, /* multi, birden fazla interceptor kullanmak için eklendi */
  ],  //services
  bootstrap: [AppComponent]  //start component
})
export class AppModule { }
