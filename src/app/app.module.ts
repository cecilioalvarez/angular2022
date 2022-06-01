import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';
import { C7Component } from './c7/c7.component';
import { ListaComponent } from './personas/lista/lista.component';
import { DetalleComponent } from './personas/detalle/detalle.component';
import { FormularioInsertarComponent } from './personas/formulario-insertar/formulario-insertar.component';
import { FormularioEditarComponent } from './personas/formulario-editar/formulario-editar.component';
import { C8Component } from './c8/c8.component';
import { C9Component } from './c9/c9.component';
import { C10Component } from './c10/c10.component';
import { FacturaComponent } from './factura/factura.component';
import { IVAPipe } from './iva.pipe';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    C7Component,
    ListaComponent,
    DetalleComponent,
    FormularioInsertarComponent,
    FormularioEditarComponent,
    C8Component,
    C9Component,
    C10Component,
    FacturaComponent,
    IVAPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
