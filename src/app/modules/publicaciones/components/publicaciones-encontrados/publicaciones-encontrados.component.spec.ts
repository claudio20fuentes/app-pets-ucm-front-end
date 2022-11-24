import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesEncontradosComponent } from './publicaciones-encontrados.component';

describe('PublicacionesEncontradosComponent', () => {
  let component: PublicacionesEncontradosComponent;
  let fixture: ComponentFixture<PublicacionesEncontradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesEncontradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesEncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
