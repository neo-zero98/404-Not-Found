import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { Huella } from '../models/huella.model';
import { ApiCarbonoService } from '../services/api-carbono.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private apiCarbono: ApiCarbonoService,  private router: Router) {
  }

  obtenerHuella(valor: any){
    console.log(valor);

    let huella = new Huella();
    huella.countAutos=valor.countAutos;
    huella.countAviones=valor.countAviones;
    huella.countComedores=valor.countComedores;
    huella.countPersonas=valor.countPersonas;
    huella.countPersonas=valor.countPersonas;
    huella.nombreEmpresa=valor.nombreEmpresa;

    this.apiCarbono.obtenerHuella(huella).subscribe(res => {
      console.log(res);
      this.gotToTab2(res);
    });
  }

  gotToTab2(res){
    const navigationExtras = JSON.stringify(res);
    this.router.navigate(['/tabs/tab2'],{ queryParams: {special:navigationExtras} });
  }

}
