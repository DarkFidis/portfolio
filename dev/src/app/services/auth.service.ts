import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer, of, Subscription } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { JwtToken } from '../models/jwtToken.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
    this.initToken();
    this.subscription = this.initTimer();
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

  public initTimer() {
    return timer(2000, 100000).pipe(
      switchMap(() => {
        if(localStorage.getItem('jwt')) {
          return this.http.get<string>('/api/auth/refresh-token').pipe(
            tap((token: string) => {
              this.jwtToken.next({
                isAuth: true,
                token: token
              });
              localStorage.setItem('jwt', token);
            })
          );
        } else {
          this.subscription.unsubscribe();
          return of(null);
        }
      })
    ).subscribe(() => {}, err => {
      this.jwtToken.next({
        isAuth: false,
        token: null
      });
      localStorage.removeItem('jwt');
      this.subscription.unsubscribe();
    });
  }

  public signup(user: User): Observable<User> {
    return this.http.post<User>('/api/auth/signup', user);
  }

  public signin(credentials: { email: string, password: string}): Observable<string> {
    return this.http.post<string>('/api/auth/signin', credentials).pipe(
      tap((token: string) => {
        this.jwtToken.next({
          isAuth: true,
          token: token
        });
        localStorage.setItem('jwt', token);
        this.subscription = this.initTimer();
      })
    )
  }

  public logout(): void {
    this.jwtToken.next({
      isAuth: false,
      token: null
    });
    localStorage.removeItem('jwt');
  }
}
