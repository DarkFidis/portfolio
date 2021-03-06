import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { JwtToken } from '../models/JwtToken.model';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.jwtToken.pipe(
      map( (jwtToken: JwtToken) => {
        if(jwtToken.isAuth) {
          return true;
        } else {
          this.router.navigate(['/signin']);
          return false;
        }
      })
    );
  }
}
