import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  name = "Victor Eduardo";
  lastname = "Maldonado Machuca";
  age = "22";
  genre = "Masculino"
  phone = "8715644203"

  constructor() { }

  ngOnInit(): void {
  }

}
