import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LibroService } from "../../service/libro.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
})
export class ListarComponent implements OnInit {
  breadCrumbItems = [{ label: "Anime" }, { label: "Listar", active: true }];
  p: string | number;

  constructor(
    private libroService: LibroService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.libroService.getPage();
  }
}
