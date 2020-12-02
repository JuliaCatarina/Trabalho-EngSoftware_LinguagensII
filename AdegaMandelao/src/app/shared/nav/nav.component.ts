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

  // Routings
  routeInicial(){this.router.navigateByUrl("/produtos")}
  routeOutro(){this.router.navigateByUrl("/produtos?categoria=1")}
  routeCerveja(){this.router.navigateByUrl("/produtos?categoria=2")}
  routeVodka(){this.router.navigateByUrl("/produtos?categoria=4")}
  routeTequila(){this.router.navigateByUrl("/produtos?categoria=5")}
  routeGim(){this.router.navigateByUrl("/produtos?categoria=6")}
  routeWhisky(){this.router.navigateByUrl("/produtos?categoria=7")}
  routeVinho(){this.router.navigateByUrl("/produtos?categoria=8")}
  routeCachaca(){this.router.navigateByUrl("/produtos?categoria=9")}
  routeRum(){this.router.navigateByUrl("/produtos?categoria=10")}
  routeChampanhe(){this.router.navigateByUrl("/produtos?categoria=11")}
  routeLicor(){this.router.navigateByUrl("/produtos?categoria=12")}
  routeChopp(){this.router.navigateByUrl("/produtos?categoria=13")}

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
