import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFormaturaComponent } from './listar-formatura.component';

describe('ListarFormaturaComponent', () => {
  let component: ListarFormaturaComponent;
  let fixture: ComponentFixture<ListarFormaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFormaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFormaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
