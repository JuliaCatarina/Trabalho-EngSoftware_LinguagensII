import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDashboardComponent } from './produtos-dashboard.component';

describe('ProdutosDashboardComponent', () => {
  let component: ProdutosDashboardComponent;
  let fixture: ComponentFixture<ProdutosDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
