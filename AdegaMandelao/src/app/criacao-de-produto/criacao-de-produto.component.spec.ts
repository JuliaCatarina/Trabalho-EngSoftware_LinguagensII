import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoDeProdutoComponent } from './criacao-de-produto.component';

describe('CriacaoDeProdutoComponent', () => {
  let component: CriacaoDeProdutoComponent;
  let fixture: ComponentFixture<CriacaoDeProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoDeProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriacaoDeProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
