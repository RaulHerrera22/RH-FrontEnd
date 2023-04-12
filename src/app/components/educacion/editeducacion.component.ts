import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
    educacion: Educacion = null;



  constructor(private educationS : EducacionService,
              private ActivatedRouter : ActivatedRoute,
              private router: Router){

  }

  ngOnInit(): void {
    const id = this.ActivatedRouter.snapshot.params['id'];
    this.educationS.detail(id).subscribe(data =>{
      this.educacion = data;
    }, err => {
      alert("Error al modificar");
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void {
    const id =  this.ActivatedRouter.snapshot.params['id'];
    this.educationS.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
      
    )

  }
}
