import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
export interface UserDetails {
  _id: string;
  email: string;
  first_name: string;
  last_name:string;
  user_name: string;
  exp: number;
  iat: number;
}
interface TokenResponse {
  token: string;
}


export interface TokenPayload {
  email: string;
  first_name?: string;
  last_name?:string;
  password: string;
  user_name?:string;
}
@Injectable()
export class AuthenticationService {
  private token: string;
  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload)
    } else {
      return null;
    }
  }
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }
  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }
  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post('http://localhost:3000/api/'.concat(type), user);
    } else {
      let token = this.getToken()
      base = this.http.get('http://localhost:3000/api/profile', { headers: { Authorization: 'Bearer '.concat(token) } });
    }
    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    )
    return request;
  }

}

