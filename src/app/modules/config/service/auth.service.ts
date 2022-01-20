import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private resourceUrl = "http://localhost:3000/usuarios";

  constructor(protected http: HttpClient) { }

  userAuthentication(user: User): Observable<User> {
    return this.http.get<User>(`${this.resourceUrl}?name=${user.name}&password=${user.password}`);
  }
}
