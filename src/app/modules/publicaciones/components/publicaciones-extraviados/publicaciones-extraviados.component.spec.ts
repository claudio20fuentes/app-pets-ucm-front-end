import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionesExtraviadosComponent } from './publicaciones-extraviados.component';

describe('PublicacionesExtraviadosComponent', () => {
  let component: PublicacionesExtraviadosComponent;
  let fixture: ComponentFixture<PublicacionesExtraviadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionesExtraviadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionesExtraviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
