import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaturaComponent } from './formatura.component';

describe('FormaturaComponent', () => {
  let component: FormaturaComponent;
  let fixture: ComponentFixture<FormaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
