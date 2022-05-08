import { Component, OnInit } from '@angular/core';
//2. Se está importando el portfolio.service para que al componente se le pueda inyectar el método obtener datos
import { PortfolioService} from "src/app/servicios/portfolio.service";

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

// 3. Dentro de export se le está inyectando el servicio que el compenente va a utilizar.
export class EncabezadoComponent implements OnInit {

  constructor( private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
