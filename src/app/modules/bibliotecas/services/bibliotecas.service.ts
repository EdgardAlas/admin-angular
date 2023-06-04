import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Biblioteca2Response } from "src/app/modules/bibliotecas/models/biblioteca.model";

@Injectable({
  providedIn: "root",
})
export class BibliotecasService {
  url = "http://localhost:8080/bibliotecas";

  constructor(private http: HttpClient) {}

  public bibliotecas(page = 0, size = 10) {
    return this.http.get<Biblioteca2Response>(this.url, {
      params: {
        page,
        size,
      },
    });
  }

  public bibliotecaById(id: number) {
    return this.http.get<Biblioteca2Response>(`${this.url}/${id}`);
  }
}
