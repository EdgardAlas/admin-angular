export interface LibrosResponse {
  content: Libro[];
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

export interface Libro {
  id: number;
  nombre: string;
  biblioteca: Biblioteca;
}

export interface Biblioteca {
  id: number;
  nombre: string;
}
