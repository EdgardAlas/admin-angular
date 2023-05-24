import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EmpleadoService } from "src/app/modules/empleado/service/empleado.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-crear-editar",
  templateUrl: "./modal-crear-editar.component.html",
  styleUrls: ["./modal-crear-editar.component.scss"],
})
export class ModalCrearEditarComponent implements OnInit {
  @Input() modal: NgbActiveModal;

  constructor(
    private empleadoService: EmpleadoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  get empleadoForm() {
    return this.empleadoService.empleadoForm;
  }

  onSubmit() {
    if (!this.empleadoForm.valid) {
      const controls = this.empleadoForm.controls;
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    if (this.empleadoForm.value.id) {
      return this.empleadoService
        .update(this.empleadoForm.value)
        .subscribe((res) => {
          this.empleadoService.getPage();
          this.modalService.dismissAll();
          Swal.fire(
            "¡Actualizado!",
            "Registro ha sido actualizado con exito.",
            "success"
          );
        });
    }

    this.empleadoService.create(this.empleadoForm.value).subscribe((res) => {
      this.empleadoService.getPage();
      this.modalService.dismissAll();
      Swal.fire("¡Creado!", "Registro ha sido creado con exito.", "success");
    });
  }

  get errorClass() {
    return this.empleadoService.errorClass;
  }

  get hasError() {
    return this.empleadoService.hasError;
  }
}
