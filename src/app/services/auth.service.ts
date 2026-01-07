import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'ADMIN' | 'STAFF' | 'USER';

export interface AuthUser {
  username: string;
  role: UserRole;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<AuthUser | null>(null);
  user$ = this.userSubject.asObservable();

  setUser(username: string, role: UserRole) {
    this.userSubject.next({ username, role });
  }

  logout() {
    this.userSubject.next(null);
  }
}
