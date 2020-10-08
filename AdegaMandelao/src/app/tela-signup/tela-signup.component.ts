import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-tela-signup',
  templateUrl: './tela-signup.component.html',
  styleUrls: ['./tela-signup.component.css']
})
export class TelaSignupComponent implements OnInit {

  signupForm = new FormGroup({
    "email": new FormControl(null, [Validators.required, Validators.email]),
    "nome": new FormControl(null, Validators.required),
    "groupSenhas": new FormGroup({
      "senha1": new FormControl(null, [Validators.required]),
      "senha2": new FormControl(null, [Validators.required]),
    }, [this.matchingPasswords])
  })
  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form : FormGroup) {
    console.log(form.value);
    console.log(form['controls'].groupSenhas['controls'].senha1.value);

    this.authservice.signup(
      form.value.nome,
      form.value.email,
      form['controls'].groupSenhas['controls'].senha1.value);
  }

  equalPassword(control: AbstractControl) : {[s:string]: boolean} {
    if (control.value === this.signupForm.controls['senha'].value){
      return null;
    }
    return {"Senhas não são iguais": true}
  }

  matchingPasswords(group : FormGroup) : {[s:string]:boolean} {
    let pass = group.get('senha1').value;
    let passConfirm = group.get('senha2').value;

    return pass === passConfirm ? null : { "Not matching passwords": true }
  }
}


