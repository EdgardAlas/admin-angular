import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Biblioteca } from "src/app/modules/biblioteca/interface/biblioteca";
import { BibliotecaService } from "src/app/modules/biblioteca/service/biblioteca.service";
import { Empleado } from "src/app/modules/empleado/interface/empleado";
import { EmpleadoService } from "src/app/modules/empleado/service/empleado.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html",
  styleUrls: ["./tabla.component.scss"],
})
export class TablaComponent implements OnInit {
  constructor(
    private bibliotecaService: BibliotecaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  get bibliotecas() {
    return this.bibliotecaService.bibliotecas;
  }

  get addLibro() {
    return this.bibliotecaService.addLibro;
  }

  openModal(content: any, biblitoeca: Biblioteca) {
    return this.bibliotecaService.openModal(content, () => {
      if (biblitoeca) {
        this.empleadoForm.reset();
        (this.empleadoForm.controls.libros as FormArray).clear();
        this.empleadoForm.setValue({
          id: biblitoeca.id,
          nombre: biblitoeca.nombre,
          libros: [],
        });

        biblitoeca.libros.forEach((libro) => {
          (this.empleadoForm.controls.libros as FormArray).push(
            new FormGroup({
              id: new FormControl(libro.id, []),
              nombre: new FormControl(libro.nombre, [Validators.required]),
            })
          );
        });
      }
    });
  }

  get empleadoForm() {
    return this.bibliotecaService.empleadoForm;
  }

  pageChange(page: number) {
    this.bibliotecaService.getPage(page - 1);
  }

  get isLoading() {
    return this.bibliotecaService.isLoading;
  }

  delete(id: number) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "¡Sí, bórralo!",
      cancelButtonText: "No, cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.bibliotecaService.delete(id).subscribe((res) => {
          this.bibliotecaService.getPage();
        });
        Swal.fire(
          "¡Eliminado!",
          "Registro ha sido eliminado con exito.",
          "success"
        );
      }
    });
  }

  get nombreBuscar() {
    return this.bibliotecaService.nombreBuscar;
  }

  get errorClass() {
    return this.bibliotecaService.errorClass;
  }

  get hasError() {
    return this.bibliotecaService.hasError;
  }
}
