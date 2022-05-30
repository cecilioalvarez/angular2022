import { FormularioInsertarComponent } from './personas/formulario-insertar/formulario-insertar.component';
import { ListaComponent } from './personas/lista/lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './personas/detalle/detalle.component';
import { FormularioEditarComponent } from './personas/formulario-editar/formulario-editar.component';

const routes: Routes = [

  {path:"personas", component:ListaComponent},
  {path:"personas/detalle/:dni", component:DetalleComponent},
  {path:"personas/formularioinsertar", component:FormularioInsertarComponent},
  {path:"personas/formularioeditar/:dni", component:FormularioEditarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
