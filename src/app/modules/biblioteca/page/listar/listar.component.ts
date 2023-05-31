import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BibliotecaService } from "../../service/biblioteca.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
})
export class ListarComponent implements OnInit {
  breadCrumbItems = [{ label: "Anime" }, { label: "Listar", active: true }];
  p: string | number;

  constructor(
    private empleadoService: BibliotecaService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.empleadoService.getPage();
  }
}
