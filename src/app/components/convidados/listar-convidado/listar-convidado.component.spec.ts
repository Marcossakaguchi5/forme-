import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConvidadoComponent } from './listar-convidado.component';

describe('ListarConvidadoComponent', () => {
  let component: ListarConvidadoComponent;
  let fixture: ComponentFixture<ListarConvidadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConvidadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
