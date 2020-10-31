import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl (null, Validators.required),
    checkBox : new FormControl (null, Validators.requiredTrue)
  });

  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form : FormGroup) {
    console.log(form.value);
    this.authservice.login(form.value.email, form.value.password)
    .subscribe(res=>{
      alert(res.message)
    }
    )
  }
  
  routeCadastrar() {

  }

}
