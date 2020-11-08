import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService : AuthService, private cartService : CartServiceService ) { }

  ngOnInit(): void {
  }

  doLogout(){
    this.authService.logout()
  }
  loggedIn(){
    return this.authService.isLoggedIn()
  }
  notLoggedIn(){
    return !this.authService.isLoggedIn()
  }
  closeCart(){
    this.cartService.cleanCart()
  }
}
