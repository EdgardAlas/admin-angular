import { LibroClass } from "src/app/modules/bibliotecas/models/libro.model";

export class BibliotecaClass {
  constructor(
    public nombre: string,
    public libros: LibroClass[],
    public id?: number
  ) {}
}

export interface Biblioteca2Response {
  content: BibliotecaClass[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
