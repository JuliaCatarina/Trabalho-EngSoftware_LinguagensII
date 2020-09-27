import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto.model';

@Component({
  selector: 'app-produtos-dashboard',
  templateUrl: './produtos-dashboard.component.html',
  styleUrls: ['./produtos-dashboard.component.css']
})
export class ProdutosDashboardComponent implements OnInit {

  constructor() { }

  dogeProduto = new Produto("1",50,"Doge de óculos. wow.","Doge","https://i.pinimg.com/236x/55/54/01/5554015289d6345c8ad5a47c8aa764d6.jpg",20,553)

  ngOnInit(): void {
  }

}
