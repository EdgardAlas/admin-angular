import { Component, OnInit, Input } from "@angular/core";
import { FormArray } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BibliotecaService } from "src/app/modules/biblioteca/service/biblioteca.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-crear-editar",
  templateUrl: "./modal-crear-editar.component.html",
  styleUrls: ["./modal-crear-editar.component.scss"],
})
export class ModalCrearEditarComponent implements OnInit {
  @Input() modal: NgbActiveModal;

  constructor(
    private bibliotecaService: BibliotecaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {}

  get empleadoForm() {
    return this.bibliotecaService.empleadoForm;
  }

  get addLibro() {
    return this.bibliotecaService.addLibro;
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
      return this.bibliotecaService
        .update(this.empleadoForm.value)
        .subscribe((res) => {
          this.bibliotecaService.getPage();
          this.modalService.dismissAll();
          Swal.fire(
            "¡Actualizado!",
            "Registro ha sido actualizado con exito.",
            "success"
          );
        });
    }

    this.bibliotecaService.create(this.empleadoForm.value).subscribe((res) => {
      this.bibliotecaService.getPage();
      this.modalService.dismissAll();
      Swal.fire("¡Creado!", "Registro ha sido creado con exito.", "success");
    });
  }

  get errorClass() {
    return this.bibliotecaService.errorClass;
  }

  get hasError() {
    return this.bibliotecaService.hasError;
  }

  get libros() {
    return this.empleadoForm.controls.libros as FormArray;
  }

  removeLibro(index: number) {
    this.libros.removeAt(index);
  }

  get hasErrorItemList() {
    return this.bibliotecaService.hasErrorItemList;
  }
}
