import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {path: '', component: TelaInicialComponent},
  {path: 'telaLogin', component: TelaLoginComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'dashboard', component: AdminDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }