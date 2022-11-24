import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEncontradoComponent } from './info-encontrado.component';

describe('InfoEncontradoComponent', () => {
  let component: InfoEncontradoComponent;
  let fixture: ComponentFixture<InfoEncontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEncontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
