import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/usuario"

  constructor(private httpClient: HttpClient) { }

  login(login: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { login, senha }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.login)
      })
    )
  }

  signup(nome: string, login: string, senha: string, isAdmin: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { nome, login, senha, isAdmin }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.login)
      })
    )
  }
}
