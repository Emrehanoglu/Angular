import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, tap } from "rxjs/operators";

@Injectable({providedIn:'root'}) /* root ile global bir guard olacağını belirttim */
export class AuthGuard implements CanActivate{
    constructor(private authService:AuthService, private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.authService.user.pipe(
            map(user =>{
                return !!user 
                /* user bilgisi var ise değili false olur, onun da değili true olur */    
                /* user bilgisi yok ise değili true olur, onun da değili false olur */ 
                /* bunu yapmamızın nedeni normalde user bilgisi boolean bir veri tipi olmadığı için bu şekilde kullanıma gidildi. */   
            }),
            tap(isAuth =>{ /* isAuth değeri yukarıdaki user dan dönecek olan true ya da false ile setlenecek */
                if(!isAuth){ /* false ise yani user bilgisi yok ise */
                    this.router.navigate(["/auth"])
                }
            })
        )
    }
}