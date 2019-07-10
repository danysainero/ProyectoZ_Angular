import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class ActivateGuard implements CanActivate {
    constructor(private authService: AuthService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return !!this.authService.getToken();
    }

}
