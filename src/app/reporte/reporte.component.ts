import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { gasto } from '../gasto';
import { user } from '../user';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent {
  gastos:gasto[]=[];
  users:user[]=[];
  constructor(private gastoService:GastoService) {
  this.gastoService.obtenerDatos().subscribe(data =>
  {
  console.log(data);
  this.gastos=data;
  
  });
  this.gastoService.obtenerDatos2().subscribe(data2 =>
    {
    console.log(data2);
    this.users=data2;
    
    });
  
  }
}

