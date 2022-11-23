import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesAdopcionComponent } from './publicaciones-adopcion.component';

describe('PublicacionesAdopcionComponent', () => {
  let component: PublicacionesAdopcionComponent;
  let fixture: ComponentFixture<PublicacionesAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesAdopcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
