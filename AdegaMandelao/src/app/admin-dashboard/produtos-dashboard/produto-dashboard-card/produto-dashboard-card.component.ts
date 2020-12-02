import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-produto-dashboard-card',
  templateUrl: './produto-dashboard-card.component.html',
  styleUrls: ['./produto-dashboard-card.component.css']
})
export class ProdutoDashboardCardComponent implements OnInit {

  constructor( private router:Router) { }

  irParaProduto(){
    this.router.navigateByUrl("/produto/"+this.product._id);
  }

  @Input()
  product : Produto;

  ngOnInit(): void {
  }

}
