import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const appRoutes : Routes = [
  {path: '', component: TelaInicialComponent},
  {path: 'telaLogin', component: TelaLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TelaInicialComponent,
    TelaLoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
