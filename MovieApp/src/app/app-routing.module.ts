import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [ /* burada url path lerimi tanımlıyorum, hangi path gelirse hangi componente gitsin ve oradaki html kodları ile önyüzde gosterilsin */
  {path:'movies', component:MoviesComponent, canActivate:[AuthGuard]}, /* 4200(projenın ayaga kalktığı standart port) portu çağırılırsa movies.component.ts 'e gitsin */
  {path: '', redirectTo:'movies',pathMatch:'full'}, /* url üzerinden bir şey yazılmadan gidilmeye calısırsa yıne movies 'e yonlendır */
  {path: 'movies/category/:categoryId', component:MoviesComponent, canActivate:[AuthGuard]},  /* göndermiş olduğum id bilgisine göre movies.component.ts içerisinde filtreleme yapacağım 
                                                                        id bilgisinide category.component.html içerisinde routerLink ile vereceğim*/
  
  {path: 'movies/create', component:MovieCreateComponent, canActivate:[AuthGuard]},
  {path: 'categories/create', component:CategoryCreateComponent, canActivate:[AuthGuard]},
  {path: 'movies/:movieId', component:MovieDetailsComponent, canActivate:[AuthGuard]},
  {path: 'auth', component:AuthComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule] /* RouterModule 'ü dışarıya acmamız gerekiyor */
})
export class AppRoutingModule { }
