import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEncontradoComponent } from './form-encontrado.component';

describe('FormEncontradoComponent', () => {
  let component: FormEncontradoComponent;
  let fixture: ComponentFixture<FormEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEncontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
