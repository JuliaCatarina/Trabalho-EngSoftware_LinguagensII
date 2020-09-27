import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDashboardCardComponent } from './produto-dashboard-card.component';

describe('ProdutoDashboardCardComponent', () => {
  let component: ProdutoDashboardCardComponent;
  let fixture: ComponentFixture<ProdutoDashboardCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoDashboardCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDashboardCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
