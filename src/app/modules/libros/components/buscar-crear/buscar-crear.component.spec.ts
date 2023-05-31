import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCrearComponent } from './buscar-crear.component';

describe('BuscarCrearComponent', () => {
  let component: BuscarCrearComponent;
  let fixture: ComponentFixture<BuscarCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
