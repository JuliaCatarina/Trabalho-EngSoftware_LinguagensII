import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaSignupComponent } from './tela-signup.component';

describe('TelaSignupComponent', () => {
  let component: TelaSignupComponent;
  let fixture: ComponentFixture<TelaSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
