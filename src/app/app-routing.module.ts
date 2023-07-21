import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './informacion/informacion.component';
import { ReporteComponent } from './reporte/reporte.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'informacion',component:InformacionComponent},
  {path:'reporte',component:ReporteComponent},
  {path:'calculadora',component:CalculadoraComponent},
  {path:'formulario',component:FormularioComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
