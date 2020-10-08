import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private token: string;

  constructor(private http : HttpClient) { }

  getToken() : string {
    return this.token;
  }

  login(email:string, password:string){
    this.http.post<{message:string, token:string}>
    ('http://localhost:3000/api/users/login',
    {email, password})
    .subscribe((res) => {
      this.token = res.token;
      localStorage.setItem("token", this.token);
    });
  }

  signup(nome:string, email:string, senha:string){
    console.log("auth service signup");

    this.http.post<{message:string}>
    ('http://localhost:3000/api/users/signup',
    {nome: nome, email: email, password: senha})
    .subscribe((res) => {
      console.log(res.message);
    });
  }

  ngOnInit(){
    // checkar se token esta guardado nno localstorage, se sim, autentificar automaticamente, renovar token, limpar timeout do token, etc
  }
}
