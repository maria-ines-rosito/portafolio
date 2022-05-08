import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
// 06. Se debe importar para que no salte error en constructor private 
export class PortfolioService {

  constructor(private http:HttpClient) { }

// 1. Método para obtener los datos del portfolio de la base de datos. 
  obtenerDatos(){
   return this.http.get("json");
  }

}