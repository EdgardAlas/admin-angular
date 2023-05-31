import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Libro } from "src/app/modules/biblioteca/interface/biblioteca";
import { LibrosResponse } from "src/app/modules/libros/interface/libro";

@Injectable({
  providedIn: "root",
})
export class LibroService {
  url = "http://localhost:8080/libros";
  isLoading = false;
  libros: LibrosResponse = {
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
    biblioteca: new FormGroup({
      id: new FormControl("", []),
      nombre: new FormControl("", [Validators.required]),
    }),
  });
  nombreBuscar = "";

  constructor(private client: HttpClient, private modalService: NgbModal) {}

  getPage(page: number = 0, size: number = 10) {
    this.isLoading = true;
    return this.client
      .get<LibrosResponse>(this.url, {
        params: {
          page: page.toString(),
          size: size.toString(),
        },
      })
      .subscribe((data) => {
        this.libros = data;
        this.isLoading = false;
      });
  }

  getOne(id: number) {
    return this.client.get<Libro>(this.url + "/buscar/" + id);
  }

  create(empleado: Libro) {
    return this.client.post(this.url, empleado);
  }

  update(empleado: Libro) {
    return this.client.put(this.url + "/" + empleado.id, empleado);
  }

  delete(id: number) {
    return this.client.delete(this.url + "/" + id);
  }

  searchByName(nombre: string) {
    return this.client
      .get<LibrosResponse>(this.url + "/buscarPorNombre/" + nombre)
      .subscribe((data) => {
        this.libros = data;
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

  hasErrorItemList(controlName: string, errorName: string, i: number) {
    const libros = this.empleadoForm.controls.libros as FormArray;
    return libros.controls[i].get(controlName).hasError(errorName);
  }
}
