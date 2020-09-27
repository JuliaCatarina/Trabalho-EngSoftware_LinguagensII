import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-produto-dashboard-card',
  templateUrl: './produto-dashboard-card.component.html',
  styleUrls: ['./produto-dashboard-card.component.css']
})
export class ProdutoDashboardCardComponent implements OnInit {

  constructor() { }

  dogeProduto = new Produto("1",50,"Doge de óculos. wow.","Doge","assets/images/doge.png",20,553)
  
  ngOnInit(): void {
  }

}