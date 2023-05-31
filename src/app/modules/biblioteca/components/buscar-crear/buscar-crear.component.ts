import { Component, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";
import { BibliotecaService } from "src/app/modules/biblioteca/service/biblioteca.service";
import { Empleado } from "src/app/modules/empleado/interface/empleado";
import { EmpleadoService } from "src/app/modules/empleado/service/empleado.service";

@Component({
  selector: "app-buscar-crear",
  templateUrl: "./buscar-crear.component.html",
  styleUrls: ["./buscar-crear.component.scss"],
})
export class BuscarCrearComponent implements OnInit {
  constructor(private bibliotecaServic: BibliotecaService) {}

  ngOnInit(): void {}

  openModal(content: any, empleado: Empleado) {
    return this.bibliotecaServic.openModal(content, () => {
      this.empleadoForm.markAsUntouched();
      (this.empleadoForm.controls.libros as FormArray).clear();

      this.empleadoForm.reset();
    });
  }

  get empleadoForm() {
    return this.bibliotecaServic.empleadoForm;
  }

  get nombreBuscar() {
    return this.bibliotecaServic.nombreBuscar;
  }

  set nombreBuscar(value: string) {
    this.bibliotecaServic.nombreBuscar = value;
  }

  searchbyNombre(event: Event) {
    event.preventDefault();

    if (this.nombreBuscar.length > 0) {
      this.bibliotecaServic.searchByName(this.nombreBuscar);
    } else {
      this.bibliotecaServic.getPage();
    }
  }
}
