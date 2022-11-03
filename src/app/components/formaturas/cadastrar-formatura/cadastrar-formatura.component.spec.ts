import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFormaturaComponent } from './cadastrar-formatura.component';

describe('CadastrarFormaturaComponent', () => {
  let component: CadastrarFormaturaComponent;
  let fixture: ComponentFixture<CadastrarFormaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFormaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFormaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
