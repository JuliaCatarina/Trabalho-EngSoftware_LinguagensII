import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-produto-dashboard-card',
  templateUrl: './produto-dashboard-card.component.html',
  styleUrls: ['./produto-dashboard-card.component.css']
})
export class ProdutoDashboardCardComponent implements OnInit {

  constructor() { }


  @Input()
  product : Produto;
  
  ngOnInit(): void {
  }

}