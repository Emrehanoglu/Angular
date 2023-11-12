import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MoviesComponent } from "./movies.component";
import { AuthGuard } from "../guards/auth.guard";
import { MovieCreateComponent } from "./movie-create/movie-create.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes : Routes = [
    {path:'movies', component:MoviesComponent, canActivate:[AuthGuard]}, /* 4200(projenın ayaga kalktığı standart port) portu çağırılırsa movies.component.ts 'e gitsin */
    
    {path: 'movies/category/:categoryId', component:MoviesComponent, canActivate:[AuthGuard]},  /* göndermiş olduğum id bilgisine göre movies.component.ts içerisinde filtreleme yapacağım 
                                                                            id bilgisinide category.component.html içerisinde routerLink ile vereceğim*/
    
    {path: 'movies/create', component:MovieCreateComponent, canActivate:[AuthGuard]},
    
    {path: 'movies/:movieId', component:MovieDetailsComponent, canActivate:[AuthGuard]}   ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports : [RouterModule]
})
export class MoviesRoutingModule{

}