import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes:Routes = [ /* burada url path lerimi tanımlıyorum, hangi path gelirse hangi componente gitsin ve oradaki html kodları ile önyüzde gosterilsin */
  {path:'movies', component:MoviesComponent}, /* 4200(projenın ayaga kalktığı standart port) portu çağırılırsa movies.component.ts 'e gitsin */
  {path: '', redirectTo:'movies',pathMatch:'full'}, /* url üzerinden bir şey yazılmadan gidilmeye calısırsa yıne movies 'e yonlendır */
  {path: 'movies/category/:categoryId', component:MoviesComponent},  /* göndermiş olduğum id bilgisine göre movies.component.ts içerisinde filtreleme yapacağım 
                                                                        id bilgisinide category.component.html içerisinde routerLink ile vereceğim*/
  {path: 'movies/:movieId', component:MovieDetailsComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule] /* RouterModule 'ü dışarıya acmamız gerekiyor */
})
export class AppRoutingModule { }
