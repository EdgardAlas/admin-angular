import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
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
    private empleadoService: EmpleadoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  get empleados() {
    return this.empleadoService.empleados;
  }

  openModal(content: any, empleado: Empleado) {
    return this.empleadoService.openModal(content, () => {
      if (empleado) {
        this.empleadoForm.setValue({
          id: empleado.id,
          nombre: empleado.nombre,
          apellido: empleado.apellido,
        });
      }
    });
  }

  get empleadoForm() {
    return this.empleadoService.empleadoForm;
  }

  pageChange(page: number) {
    this.empleadoService.getPage(page - 1);
  }

  get isLoading() {
    return this.empleadoService.isLoading;
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
        this.empleadoService.delete(id).subscribe((res) => {
          this.empleadoService.getPage();
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
    return this.empleadoService.nombreBuscar;
  }

  get errorClass() {
    return this.empleadoService.errorClass;
  }

  get hasError() {
    return this.empleadoService.hasError;
  }
}
