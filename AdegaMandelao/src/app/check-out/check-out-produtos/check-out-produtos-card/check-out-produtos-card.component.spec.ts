import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutProdutosCardComponent } from './check-out-produtos-card.component';

describe('CheckOutProdutosCardComponent', () => {
  let component: CheckOutProdutosCardComponent;
  let fixture: ComponentFixture<CheckOutProdutosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOutProdutosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutProdutosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
