export class Huella{

    countPersonas: number;
    countAutos: number;
    countAviones: number;
    countBarcos: number;
    countComedores: number;
    countElectricidad: number;
    ubicación: any;
    pago: number;

    constructor(personas: number, autos: number, aviones: number, barcos: number, comedores: number, electricidad: number, ubicacion: any, pago: number){

      this.countPersonas=personas;
      this.countAutos=autos;
      this.countAviones=aviones;
      this.countBarcos = barcos;
      this.countComedores=comedores;
      this.countElectricidad=electricidad;
      this.ubicación=ubicacion;
      this.pago=pago;
    }
}
