import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {

        if (req.url.includes('/auth/me') || !req.url.includes('/auth')) {
            const secureReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this.userService.getToken()}`).set('Bearer', this.userService.getToken() ? this.userService.getToken() : localStorage.token)            
            });
            return next.handle(secureReq);
        }
        return next.handle(req);
    }
}
