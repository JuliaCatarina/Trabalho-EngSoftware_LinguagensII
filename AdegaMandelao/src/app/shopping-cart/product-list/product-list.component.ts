import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produtos = [1,2,3,4,5,6]

  constructor() { }

  ngOnInit(): void {
  }

}
