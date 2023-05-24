import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  Empleado,
  EmpleadoResponse,
} from "src/app/modules/empleado/interface/empleado";

@Injectable({
  providedIn: "root",
})
export class EmpleadoService {
  url = "http://localhost:8080/empleado";
  isLoading = false;
  empleados: EmpleadoResponse = {
    content: [],
    pageable: {
      sort: {
        empty: true,
        unsorted: true,
        sorted: true,
      },
      offset: 0,
      pageSize: 0,
      pageNumber: 0,
      paged: true,
      unpaged: true,
    },
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 0,
    number: 0,
    sort: {
      empty: true,
      unsorted: true,
      sorted: true,
    },
    empty: true,
    first: true,
    numberOfElements: 0,
  };
  empleadoForm = new FormGroup({
    id: new FormControl("", []),
    nombre: new FormControl("", [Validators.required]),
    apellido: new FormControl("", [Validators.required]),
  });
  nombreBuscar = "";

  constructor(private client: HttpClient, private modalService: NgbModal) {}

  getPage(page: number = 0, size: number = 10) {
    this.isLoading = true;
    return this.client
      .get<EmpleadoResponse>(this.url + "/listar", {
        params: {
          page: page.toString(),
          size: size.toString(),
        },
      })
      .subscribe((data) => {
        this.empleados = data;
        this.isLoading = false;
      });
  }

  getOne(id: number) {
    return this.client.get<Empleado>(this.url + "/buscar/" + id);
  }

  create(empleado: Empleado) {
    return this.client.post(this.url + "/agregar", empleado);
  }

  update(empleado: Empleado) {
    return this.client.put(this.url + "/editar/" + empleado.id, empleado);
  }

  delete(id: number) {
    return this.client.delete(this.url + "/eliminar/" + id);
  }

  searchByName(nombre: string) {
    return this.client
      .get<EmpleadoResponse>(this.url + "/buscarPorNombre/" + nombre)
      .subscribe((data) => {
        this.empleados = data;
        this.isLoading = false;
      });
  }

  openModal(content: any, cb: () => void) {
    cb();
    this.modalService.open(content, { centered: true });
  }

  errorClass(controlName: string) {
    return {
      "is-invalid":
        this.empleadoForm.controls[controlName].invalid &&
        this.empleadoForm.controls[controlName].touched &&
        this.empleadoForm.controls[controlName].errors,
      "form-control": true,
    };
  }

  hasError(controlName: string, errorName: string) {
    return this.empleadoForm.controls[controlName].hasError(errorName);
  }
}
