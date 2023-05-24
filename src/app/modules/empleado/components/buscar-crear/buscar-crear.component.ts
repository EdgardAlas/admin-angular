import { Component, OnInit } from "@angular/core";
import { Empleado } from "src/app/modules/empleado/interface/empleado";
import { EmpleadoService } from "src/app/modules/empleado/service/empleado.service";

@Component({
  selector: "app-buscar-crear",
  templateUrl: "./buscar-crear.component.html",
  styleUrls: ["./buscar-crear.component.scss"],
})
export class BuscarCrearComponent implements OnInit {
  constructor(private empleadoService: EmpleadoService) {}

  ngOnInit(): void {}

  openModal(content: any, empleado: Empleado) {
    return this.empleadoService.openModal(content, () => {
      this.empleadoForm.markAsUntouched();
      this.empleadoForm.reset();
    });
  }

  get empleadoForm() {
    return this.empleadoService.empleadoForm;
  }

  get nombreBuscar() {
    return this.empleadoService.nombreBuscar;
  }

  set nombreBuscar(value: string) {
    this.empleadoService.nombreBuscar = value;
  }

  searchbyNombre(event: Event) {
    event.preventDefault();

    if (this.nombreBuscar.length > 0) {
      this.empleadoService.searchByName(this.nombreBuscar);
    } else {
      this.empleadoService.getPage();
    }
  }
}
