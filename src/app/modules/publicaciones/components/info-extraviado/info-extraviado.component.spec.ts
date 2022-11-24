import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoExtraviadoComponent } from './info-extraviado.component';

describe('InfoExtraviadoComponent', () => {
  let component: InfoExtraviadoComponent;
  let fixture: ComponentFixture<InfoExtraviadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoExtraviadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoExtraviadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
