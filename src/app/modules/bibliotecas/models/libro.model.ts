import { BibliotecaClass } from "src/app/modules/bibliotecas/models/biblioteca.model";

export class LibroClass {
  constructor(
    public id?: number,
    public nombre?: string,
    public bilioteca?: BibliotecaClass
  ) {}
}
