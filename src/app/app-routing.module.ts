import { FacturaComponent } from './factura/factura.component';
import { C8Component } from './c8/c8.component';
import { FormularioInsertarComponent } from './personas/formulario-insertar/formulario-insertar.component';
import { ListaComponent } from './personas/lista/lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './personas/detalle/detalle.component';
import { FormularioEditarComponent } from './personas/formulario-editar/formulario-editar.component';
import { C9Component } from './c9/c9.component';
import { C10Component } from './c10/c10.component';

const routes: Routes = [

  {path:"personas", component:ListaComponent},
  {path:"personas/detalle/:dni", component:DetalleComponent},
  {path:"personas/formularioinsertar", component:FormularioInsertarComponent},
  {path:"personas/formularioeditar/:dni", component:FormularioEditarComponent},
  {path:"c8", component:C8Component},
  {path:"c9", component:C9Component},
  {path:"c10", component:C10Component},
  {path:"cfactura", component:FacturaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
