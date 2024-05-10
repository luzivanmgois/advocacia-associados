import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AllUsersService {

 private apiUrl = 'http://localhost:8080/auth/allusers';

 constructor(private http: HttpClient) { }

getToken(): string {   
   return sessionStorage.getItem('auth-token') as string;
}

getAllUsers(): Observable<any> {
   const headers = new HttpHeaders().set('Authorization', this.getToken());
   return this.http.get(`${this.apiUrl}`, { headers });
}
}