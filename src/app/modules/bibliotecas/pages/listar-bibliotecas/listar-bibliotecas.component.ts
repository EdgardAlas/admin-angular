import { Component, OnInit } from "@angular/core";
import { Biblioteca2Response } from "src/app/modules/bibliotecas/models/biblioteca.model";
import { BibliotecasService } from "src/app/modules/bibliotecas/services/bibliotecas.service";

@Component({
  selector: "app-listar-bibliotecas",
  templateUrl: "./listar-bibliotecas.component.html",
  styleUrls: ["./listar-bibliotecas.component.scss"],
})
export class ListarBibliotecasComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  //  @ts-ignore
  bibliotecas: Biblioteca2Response = {
    content: [],
  };
  page = 0;
  size = 10;

  constructor(private bibliotecaService: BibliotecasService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Anime" },
      { label: "Mostrar", active: true },
    ];

    this.obtenerBibliotecas();
  }

  obtenerBibliotecas() {
    this.bibliotecaService
      .bibliotecas(this.page, this.size)
      .subscribe((res) => {
        console.log(res);
        this.bibliotecas = res;
      });
  }
}
