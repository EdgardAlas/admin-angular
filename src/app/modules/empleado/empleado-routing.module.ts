import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListarComponent } from "src/app/modules/empleado/page/listar/listar.component";

const routes: Routes = [
  {
    path: "listar",
    component: ListarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadoRoutingModule {}
