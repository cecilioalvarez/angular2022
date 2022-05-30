import { ListaComponent } from './personas/lista/lista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './personas/detalle/detalle.component';

const routes: Routes = [

  {path:"personas", component:ListaComponent},
  {path:"personas/detalle/:dni", component:DetalleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
