import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Biblioteca } from "src/app/modules/biblioteca/interface/biblioteca";
import { LibroService } from "src/app/modules/libros/service/libro.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-tabla",
  templateUrl: "./tabla.component.html",
  styleUrls: ["./tabla.component.scss"],
})
export class TablaComponent implements OnInit {
  constructor(private libroService: LibroService) {}

  ngOnInit(): void {}

  get libros() {
    return this.libroService.libros;
  }

  openModal(content: any, biblitoeca: Biblioteca) {
    return this.libroService.openModal(content, () => {
      if (biblitoeca) {
        this.empleadoForm.reset();
        this.empleadoForm.patchValue(biblitoeca);
      }
    });
  }

  get empleadoForm() {
    return this.libroService.empleadoForm;
  }

  pageChange(page: number) {
    this.libroService.getPage(page - 1);
  }

  get isLoading() {
    return this.libroService.isLoading;
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
        this.libroService.delete(id).subscribe((res) => {
          this.libroService.getPage();
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
    return this.libroService.nombreBuscar;
  }

  get errorClass() {
    return this.libroService.errorClass;
  }

  get hasError() {
    return this.libroService.hasError;
  }
}
