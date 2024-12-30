import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = signal(false);

  constructor() {
    this.loggedIn.set(!!localStorage.getItem('accessToken'));
  }

  login() {
    this.loggedIn.set(true);
    localStorage.setItem('accessToken', 'fate-access-token');
  }

  logout() {
    this.loggedIn.set(false);
    localStorage.removeItem('accessToken');
  }
}