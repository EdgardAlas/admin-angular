import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EmpleadoService } from "./../../service/empleado.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
})
export class ListarComponent implements OnInit {
  breadCrumbItems = [{ label: "Anime" }, { label: "Listar", active: true }];
  p: string | number;

  constructor(
    private empleadoService: EmpleadoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.empleadoService.getPage();
  }
}
