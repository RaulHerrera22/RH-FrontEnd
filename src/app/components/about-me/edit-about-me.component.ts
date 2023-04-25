import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit{
  persona: Persona | null = null;

  constructor(private activatedRouter : ActivatedRoute, private personaService : PersonaService, private router: Router, private imageService: ImageService){}

ngOnInit(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.personaService.detail(id).subscribe(data =>{
    this.persona = data;
  }, err => {
    alert("Error al modificar");
    this.router.navigate(['']);
  }
  )
}

onUpdate(): void {
  const id = this.activatedRouter.snapshot.params['id'];
  this.personaService.update(id, this.persona!).subscribe(
    data => {
      alert("Perfil modificado exitosamente")
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar el perfil");
      this.router.navigate(['/edit-perfil/{{persona.id}}']);
    }
  )
}

uploadImage($event: any) {
  const id = this.activatedRouter.snapshot.params['id'];
  const name = 'perfil_' + id;
  this.imageService.uploadImage($event, name)
}
}

