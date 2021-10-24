import { Component } from '@angular/core';
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
  constructor(private apiCarbono: ApiCarbonoService) {
    this.obtenerHuella();
  }

  obtenerHuella(){
    const huella = new Huella(1,2,2,2,2,2000,'tlaxcala', 50);
    this.apiCarbono.obtenerHuella(huella).subscribe(res => {
      console.log(res);
    });
  }

}
