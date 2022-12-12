import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewPublicacionComponent } from './form-new-publicacion.component';

describe('FormNewPublicacionComponent', () => {
  let component: FormNewPublicacionComponent;
  let fixture: ComponentFixture<FormNewPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewPublicacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNewPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
