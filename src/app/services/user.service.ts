import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class UserService {

 private apiUrl = 'http://localhost:8080/auth';

 constructor(private http: HttpClient) { }

getToken(): string {   
   return sessionStorage.getItem('auth-token') as string;
}

getUsuarioById(idUsuario: string): Observable<any> {
   const headers = new HttpHeaders().set('Authorization', this.getToken());
   return this.http.get(`${this.apiUrl}/userid/${idUsuario}`, { headers });
}

deleteUsuarioById(idUsuario: string): Observable<any> {
   const headers = new HttpHeaders().set('Authorization', this.getToken());
   return this.http.delete(`${this.apiUrl}/deluser/${idUsuario}`, { headers });
}
}
