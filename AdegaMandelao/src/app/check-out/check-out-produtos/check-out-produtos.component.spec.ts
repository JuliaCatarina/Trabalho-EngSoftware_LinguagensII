import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutProdutosComponent } from './check-out-produtos.component';

describe('CheckOutProdutosComponent', () => {
  let component: CheckOutProdutosComponent;
  let fixture: ComponentFixture<CheckOutProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
