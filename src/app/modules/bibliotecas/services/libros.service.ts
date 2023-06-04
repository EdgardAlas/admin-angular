import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LibroClass } from "src/app/modules/bibliotecas/models/libro.model";

@Injectable({
  providedIn: "root",
})
export class LibrosService {
  url = "http://localhost:8080/libros";

  constructor(private http: HttpClient) {}

  agregarLibro(libro: LibroClass) {
    return this.http.post(this.url, libro);
  }

  editarLibro(libro: LibroClass) {
    return this.http.put(`${this.url}/${libro.id}`, libro);
  }

  borrarLibro(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
