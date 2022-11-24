import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExtraviadoComponent } from './form-extraviado.component';

describe('FormExtraviadoComponent', () => {
  let component: FormExtraviadoComponent;
  let fixture: ComponentFixture<FormExtraviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExtraviadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExtraviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
