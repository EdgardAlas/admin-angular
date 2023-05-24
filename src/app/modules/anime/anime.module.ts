import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimeRoutingModule } from "./anime-routing.module";
import { CardComponent } from "./card/card.component";
import { ListarComponent } from "./pages/listar/listar.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { UIModule } from "src/app/shared/ui/ui.module";
import { TablaComponent } from "./pages/tabla/tabla.component";
import { MostrarComponent } from "./pages/mostrar/mostrar.component";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    CardComponent,
    ListarComponent,
    BuscarComponent,
    TablaComponent,
    MostrarComponent,
  ],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    UIModule, //!Migas
    ReactiveFormsModule,
    FormsModule, //!Para el Modal
    NgxPaginationModule, //!Para paginar
    Ng2SearchPipeModule, //!Pa buscar
  ],
})
export class AnimeModule {}
