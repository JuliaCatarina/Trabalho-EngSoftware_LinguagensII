import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private token: string;
  private expiresAt: moment.Moment;

  constructor(private http : HttpClient) { }

  getToken() : string {
    return this.token;
  }

  login(email:string, password:string){
    this.http.post<{message:string, token:string, expiresIn:number, statusCode:number,}>
    ('http://localhost:3000/api/users/login',
    {email, password})
    .subscribe((res) => {
      console.log(res)
      if(res.statusCode===200){
        this.token = res.token;
        localStorage.setItem("token", this.token);
        const expiresAt = moment().add(res.expiresIn, 'second');
        localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()));
      }
  
      /*
      if(res.statusCode===401){
      }
      if(res.statusCode===404){
      }
      */

    });
  }

  public isLoggedIn(){
    const expiration = localStorage.getItem('expiresAt');
    const expiresAt = JSON.parse(expiration);
    return moment().isBefore(moment(expiresAt));
  }

  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
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
