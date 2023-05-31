import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListarComponent } from "./page/listar/listar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { TablaComponent } from "./components/tabla/tabla.component";
import { ModalCrearEditarComponent } from "./components/modal-crear-editar/modal-crear-editar.component";
import { BuscarCrearComponent } from "./components/buscar-crear/buscar-crear.component";
import { UIModule } from "../../shared/ui/ui.module";
import { LibrosRoutingModule } from "./libros-routing.module";

@NgModule({
  declarations: [
    ListarComponent,
    TablaComponent,
    ModalCrearEditarComponent,
    BuscarCrearComponent,
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    SharedModule,
    UIModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
})
export class LibrosModule {}
