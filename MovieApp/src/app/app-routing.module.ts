import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './guards/auth.guard';

const routes:Routes = [ /* burada url path lerimi tanımlıyorum, hangi path gelirse hangi componente gitsin ve oradaki html kodları ile önyüzde gosterilsin */
  
  {path: 'categories/create', component:CategoryCreateComponent, canActivate:[AuthGuard]},
  {path: 'auth', component:AuthComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule] /* RouterModule 'ü dışarıya acmamız gerekiyor */
})
export class AppRoutingModule { }
