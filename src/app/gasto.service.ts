import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gasto } from './gasto';
import { user } from './user';
const configUrl='assets/datos.json';
@Injectable({
  providedIn: 'root'
})
export class GastoService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http esta funcionando…')
    }

    obtenerDatos(){
      return this.httpclient.get<gasto[]>(configUrl)
    }

    obtenerDatos2(){
      return this.httpclient.get<user[]>('https://jsonplaceholder.typicode.com/users')
    }
}

