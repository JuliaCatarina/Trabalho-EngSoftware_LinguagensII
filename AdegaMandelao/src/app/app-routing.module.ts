import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { Produto } from './produto.model';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaSignupComponent } from './tela-signup/tela-signup.component';

const routes: Routes = [
  {path: '', component: TelaInicialComponent},
  {path: 'telaLogin', component: TelaLoginComponent},
  {path: 'telaSignup', component: TelaSignupComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'dashboard', component: AdminDashboardComponent},
  //{path: 'produto', component: ProdutoComponent},
  {path: "produto/:id", component: ProdutoComponent},
  {path: "checkOut", component: CheckOutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
