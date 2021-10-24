import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Huella } from '../models/huella.model';

@Injectable({
  providedIn: 'root',
})
export class ApiCarbonoService {
  private url = 'https://www.scsystems.us/co2.php';

  constructor(private http: HttpClient) {}

  obtenerHuella(huella: Huella) {
    const objeto = {
      nombreEmpresa: huella.nombreEmpresa,
      countPersonas: huella.countPersonas,
      countAutos: huella.countAutos,
      countAviones: huella.countAviones,
      countBarcos: huella.countBarcos,
      countComedores: huella.countComedores,
      countElectricidad: huella.countElectricidad,
      ubicación: huella.ubicación,

      pago: huella.pago,
    };
    return this.http.post<any>(this.url, { objeto });
  }
}
