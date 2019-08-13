import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { JwtToken } from '../models/jwtToken.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.initToken();
  }

  public jwtToken: BehaviorSubject<JwtToken> = new BehaviorSubject({
    isAuth: null,
    token: null
  })

  public initToken(): void {
    const token = localStorage.getItem('jwt');
    if(token) {
      this.jwtToken.next({
        isAuth: true,
        token: token
      });
    } else {
      this.jwtToken.next({
        isAuth: false,
        token: null
      });
    }
  }

  public signup(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/signup');
  }

  public signin(credentials: { email: string, password: string}): Observable<string> {
    return this.http.post<string>('/api/auth/signin', credentials).pipe(
      tap((token: string) => {
        this.jwtToken.next({
          isAuth: true,
          token: token
        });
        localStorage.setItem('jwt', token);
      })
    )
  }
}
