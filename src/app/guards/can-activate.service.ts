import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable()
export class ActivateGuard implements CanActivate {
    constructor(private userService: UserService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return !!this.userService.getToken();
    }

}
