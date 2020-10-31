import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  doLogout(){
    this.authService.logout();
  }
  loggedIn(){
    return this.authService.isLoggedIn()
  }
}
