import { UIModule } from "src/app/shared/ui/ui.module";
import { SharedModule } from "src/app/cyptolanding/shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BibliotecaRoutingModule } from "./biblioteca-routing.module";
import { ListarComponent } from "./page/listar/listar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { TablaComponent } from "./components/tabla/tabla.component";
import { ModalCrearEditarComponent } from "./components/modal-crear-editar/modal-crear-editar.component";
import { BuscarCrearComponent } from "./components/buscar-crear/buscar-crear.component";

@NgModule({
  declarations: [
    ListarComponent,
    TablaComponent,
    ModalCrearEditarComponent,
    BuscarCrearComponent,
  ],
  imports: [
    CommonModule,
    BibliotecaRoutingModule,
    SharedModule,
    UIModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
})
export class BibliotecaModule {}
