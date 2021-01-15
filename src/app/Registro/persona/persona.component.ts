import { Component, OnInit } from '@angular/core';
import {Persona} from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  public nuevo:Persona;
  public nombre: string;
  public apellidos: string;
  public edad: string;
  public sexo: string;
  public telefono: string;

  constructor() { 
    this.nuevo = new Persona()
    this.nombre = this.nuevo.setName("Victor Eduardo");
    this.apellidos = this.nuevo.setLastName("Maldonado Machuca");
    this.edad = this.nuevo.setAge("22")
    this.sexo = this.nuevo.setGenre("Masculino")
    this.telefono = this.nuevo.setPhone("8715644203")
  }
  ngOnInit(): void {
  }

}
