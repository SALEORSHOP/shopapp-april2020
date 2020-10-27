import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../../models/user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }

  registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.url, user)
  }
}
