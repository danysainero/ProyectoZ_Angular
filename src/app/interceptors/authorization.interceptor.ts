import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';


@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        if (req.url.includes('/auth/me') || !req.url.includes('/auth')) {
            const secureReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.authService.getToken()}`)          
            });
            return next.handle(secureReq);
        }
        return next.handle(req);
    }
}
 