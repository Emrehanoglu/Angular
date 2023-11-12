import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes:Routes = [ /* burada url path lerimi tanımlıyorum, hangi path gelirse hangi componente gitsin ve oradaki html kodları ile önyüzde gosterilsin */
  {path: '', redirectTo:'movies',pathMatch:'full'}, /* url üzerinden bir şey yazılmadan gidilmeye calısırsa yıne movies 'e yonlendır */
  {path: 'auth', component:AuthComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule] /* RouterModule 'ü dışarıya acmamız gerekiyor */
})
export class AppRoutingModule { }
