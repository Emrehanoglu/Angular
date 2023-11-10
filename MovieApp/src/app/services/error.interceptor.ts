import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err:HttpErrorResponse) => {
                let error = "hata oluştu"
                if(err.error.error){
                    if(err.status == 401){
                        error = 'yetkiniz yok'
                        return throwError(error)
                    }
                }
                if(err.error.error){
                    switch(err.error.error.message){
                      case "EMAIL_EXISTS":
                        error = 'Bu email adresi kullanılmış'
                        break
                      case "INVALID_LOGIN_CREDENTIALS":
                        error = 'Email veya Password bilgisi hatalı'
                        break
                    }
                }
                return throwError(error)
            })
        )
    }

}
