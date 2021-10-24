import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Huella } from 'src/app/models/huella.model';

@Component({
  selector: 'app-form-registro-inicio',
  templateUrl: './form-registro-inicio.component.html',
  styleUrls: ['./form-registro-inicio.component.scss'],
})
export class FormRegistroInicioComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  listEstados = [
    { id: 1,val: 'Aguascalientes', isChecked: false },{ id: 2, val: 'Baja California', isChecked: false },
    { id: 3,val: 'Baja California Sur', isChecked: false },{ id: 4, val: 'Campeche', isChecked: false },
    { id: 5,val: 'Chiapas', isChecked: false },{ id: 6, val: 'Chihuahua', isChecked: false },
    { id: 7,val: 'Ciudad de México', isChecked: false },{ id: 8, val: 'Coahuila', isChecked: false },
    { id: 9,val: 'Colima', isChecked: false },{ id: 10, val: 'Durango', isChecked: false },
    { id: 11,val: 'Estado de México', isChecked: false },{ id: 12, val: 'Guanajuato', isChecked: false },
    { id: 13,val: 'Guerrero', isChecked: false },{ id: 14, val: 'Hidalgo', isChecked: false },
    { id: 15,val: 'Jalisco', isChecked: false },{ id: 16, val: 'Michoacán', isChecked: false },
    { id: 17,val: 'Morelos', isChecked: false },{ id: 18, val: 'Nayarit', isChecked: false },
    { id: 19,val: 'Nuevo León', isChecked: false },{ id: 20, val: 'Oaxaca', isChecked: false },
    { id: 21,val: 'Puebla', isChecked: false },{ id: 22, val: 'Querétaro', isChecked: false },
    { id: 23,val: 'Quintana Roo', isChecked: false }, { id: 24, val: 'San Luis Potosí', isChecked: false },
    { id: 25,val: 'Sinaloa', isChecked: false },{ id: 26, val: 'Sonora', isChecked: false },
    { id: 27,val: 'Tabasco', isChecked: false },{ id: 28, val: 'Tamaulipas', isChecked: false },
    { id: 29,val: 'Tlaxcala', isChecked: false },{ id: 30, val: 'Veracruz', isChecked: false },
    { id: 31,val: 'Yucatán', isChecked: false },{ id: 32, val: 'Zacatecas', isChecked: false }
  ];

  form = this.fb.group({
    nombre: ['',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30),
    ]],
    electricidad: [,[
      Validators.required
    ]],
    colaboradores: [,[
      Validators.required
    ]],
    estados: [,[
      Validators.required
    ]],
    cafeteria:[],
    aviones: [],
    cantidadAviones:[,[
      Validators.required
    ]]
  });

  btnOpcion: number;
  btnEstados: boolean;
  constructor(
    private fb: FormBuilder
  ) {
    this.btnOpcion = 1;
    this.btnEstados = false;
  }

  ngOnInit() {}

  siguiente(initialState = 1){
    if(initialState === 10){
      const cuerpo={
        nombreEmpresa: this.form.value.nombre,
        countPersonas: this.form.value.colaboradores,
        countAutos: 0,
        countAviones: this.form.value.cantidadAviones,
        countComedores: this.form.value.cafeteria
      };

      this.newItemEvent.emit(cuerpo);
    }

    if(initialState > 1){
      this.btnOpcion = initialState;
      return;
    }
    this.btnOpcion = this.btnOpcion + 1;
  }

  anterior(initialState = 1){
    if(initialState > 1){
      this.btnOpcion = initialState;
      return;
    }
    this.btnOpcion = this.btnOpcion - 1;
  }

  vaciarFormBuilder(){
    // this.setCapturistaStorage();
    this.form.reset();
    // this.getCapturistaStorage();
  }

  seatearObjeto(){
    // this.huella.nombreEmpresa = this.form.value.nombre;
    // this.huella.countElectricidad = this.form.value.electricidad;
    // this.persona.apellido_paterno = this.form.value.apellido_paterno;
    // this.persona.apellido_materno = this.form.value.apellido_materno;
    // this.persona.telefono = this.form.value.telefono;
    // this.persona.sexo = this.form.value.sexo;
    // this.persona.direccion = this.form.value.direccion;
    // this.persona.capturista = this.form.value.capturista;
    // this.persona.seccion = this.form.value.seccion;
    // this.persona.fecha_registro = this.form.value.fecha_registro;
  }

}
