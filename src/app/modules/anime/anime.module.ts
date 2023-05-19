import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card/card.component";
import { ListarComponent } from "./pages/listar/listar.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ReactiveFormsModule } from "@angular/forms";
import { BuscarComponent } from "./pages/buscar/buscar.component";
import { AnimeRouting } from "src/app/modules/anime/anime-routing.module";
import { PagetitleComponent } from "src/app/shared/ui/pagetitle/pagetitle.component";
import { SharedModule } from "src/app/cyptolanding/shared/shared.module";
import { UIModule } from "src/app/shared/ui/ui.module";

@NgModule({
  declarations: [CardComponent, ListarComponent, BuscarComponent],
  imports: [
    CommonModule,
    AnimeRouting,
    InfiniteScrollModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule,
  ],
})
export class AnimeModule {}
