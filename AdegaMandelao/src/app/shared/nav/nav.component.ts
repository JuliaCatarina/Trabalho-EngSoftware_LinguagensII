import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { CartServiceService } from 'src/app/cart-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService : AuthService, private cartService : CartServiceService, private router:Router ) { }

  ngOnInit(): void {
  }


  routeInicial(){
    this.router.navigateByUrl("/produtos")
  }
  routeCerveja(){
    this.router.navigateByUrl("/produtos?categoria=2")
  }
  routeVodka(){
    this.router.navigateByUrl("/produtos?categoria=4")
  }
  routeTequila(){
    this.router.navigateByUrl("/produtos?categoria=5")
  }
  routeOutro(){
    this.router.navigateByUrl("/produtos?categoria=1")
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
