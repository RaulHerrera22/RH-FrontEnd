import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import {  Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
    nombreE: string = '';
    descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) {}


  ngOnInit(): void {
    
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(exp).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló al añadir una experiencia");
      this.router.navigate(['']);
    })
  }
}