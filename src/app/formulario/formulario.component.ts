import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  ruc:string="";
  valor:number=0;
  gasto:string="ninguno";
  constructor(){

  }
  ngOnInit(): void {
    
  }
}
