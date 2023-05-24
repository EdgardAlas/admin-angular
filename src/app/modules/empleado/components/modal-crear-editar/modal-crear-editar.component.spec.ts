import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearEditarComponent } from './modal-crear-editar.component';

describe('ModalCrearEditarComponent', () => {
  let component: ModalCrearEditarComponent;
  let fixture: ComponentFixture<ModalCrearEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCrearEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
