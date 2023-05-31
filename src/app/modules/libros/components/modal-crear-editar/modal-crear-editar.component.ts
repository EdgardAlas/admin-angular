import { Component, OnInit, Input } from "@angular/core";
import { FormArray } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Biblioteca } from "src/app/modules/biblioteca/interface/biblioteca";
import { BibliotecaService } from "src/app/modules/biblioteca/service/biblioteca.service";
import { LibroService } from "src/app/modules/libros/service/libro.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-crear-editar",
  templateUrl: "./modal-crear-editar.component.html",
  styleUrls: ["./modal-crear-editar.component.scss"],
})
export class ModalCrearEditarComponent implements OnInit {
  @Input() modal: NgbActiveModal;
  bibliotecas: Biblioteca[] = [];

  constructor(
    private libroService: LibroService,
    private BibliotecaService: BibliotecaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadBibliotecas();
  }

  loadBibliotecas() {
    this.BibliotecaService.getAllBibliotecas().then((res) => {
      this.bibliotecas = res;
      console.log(this.bibliotecas);
    });
  }

  get empleadoForm() {
    return this.libroService.empleadoForm;
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
      return this.libroService
        .update(this.empleadoForm.value)
        .subscribe((res) => {
          this.libroService.getPage();
          this.modalService.dismissAll();
          Swal.fire(
            "¡Actualizado!",
            "Registro ha sido actualizado con exito.",
            "success"
          );
        });
    }

    this.libroService.create(this.empleadoForm.value).subscribe((res) => {
      this.libroService.getPage();
      this.modalService.dismissAll();
      Swal.fire("¡Creado!", "Registro ha sido creado con exito.", "success");
    });
  }

  get errorClass() {
    return this.libroService.errorClass;
  }

  get hasError() {
    return this.libroService.hasError;
  }

  get libros() {
    return this.empleadoForm.controls.libros as FormArray;
  }

  removeLibro(index: number) {
    this.libros.removeAt(index);
  }

  get hasErrorItemList() {
    return this.libroService.hasErrorItemList;
  }
}
