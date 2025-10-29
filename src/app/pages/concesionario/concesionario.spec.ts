import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Concesionario } from './concesionario';

describe('Concesionario', () => {
  let component: Concesionario;
  let fixture: ComponentFixture<Concesionario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Concesionario]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Concesionario);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
