import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { NavComponent } from './shared/nav/nav.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProdutosDashboardComponent } from './admin-dashboard/produtos-dashboard/produtos-dashboard.component';
import { ProdutoDashboardCardComponent } from './admin-dashboard/produtos-dashboard/produto-dashboard-card/produto-dashboard-card.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { TelaSignupComponent } from './tela-signup/tela-signup.component';
import { ProdutoComponent } from './produto/produto.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CheckOutProdutosComponent } from './check-out/check-out-produtos/check-out-produtos.component';
import { CheckOutProdutosCardComponent } from './check-out/check-out-produtos/check-out-produtos-card/check-out-produtos-card.component';
import { CriacaoDeProdutoComponent } from './criacao-de-produto/criacao-de-produto.component';
import { NgxBootstrapIconsModule, CartPlus, ThreeDots, CartDash } from 'ngx-bootstrap-icons';

const icons = {
  CartPlus,
  ThreeDots,
  CartDash,
}

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaLoginComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ProdutosComponent,
    AdminDashboardComponent,
    ProdutosDashboardComponent,
    ProdutoDashboardCardComponent,
    TelaSignupComponent,
    ProdutoComponent,
    CheckOutComponent,
    CheckOutProdutosComponent,
    CheckOutProdutosCardComponent,
    CriacaoDeProdutoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
