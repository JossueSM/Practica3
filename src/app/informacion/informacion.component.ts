import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  constructor(){  }
  ngOnInit(): void {
    
  }
  deducibles=['Vivienda','Salud','Educacion']
  infdeducibles=['GASTOS DE VIVIENDA',"GASTOS DE SALUD","GASTOS DE EDUCACION"]

  informacion()
{
 alert('Esta es información adicional');
}
borrarDeducible(deducible: string)
{
 for(let i=0;i<this.deducibles.length;i++)
 {
 if(deducible==this.deducibles[i])
 {
 this.deducibles.splice(i,1);
 }
 }
}
}
