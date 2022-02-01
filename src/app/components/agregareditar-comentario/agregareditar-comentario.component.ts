import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-agregareditar-comentario',
  templateUrl: './agregareditar-comentario.component.html',
  styleUrls: ['./agregareditar-comentario.component.css']
})
export class AgregareditarComentarioComponent implements OnInit {
  agregarComentario: FormGroup;
  accion= 'Agregar'
  id=0;
  comentario: Comentario | undefined;

  constructor(private fb: FormBuilder, private comentarioService: ComentarioService,
              private router: Router,private aRoute: ActivatedRoute) { 
    this.agregarComentario = this.fb.group({
      titulo: ['',Validators.required],
      creador: ['',Validators.required],
      texto: ['',Validators.required]
    })
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar()
  }

  esEditar(){
    if(this.id !== 0){
      this.accion= 'Editar'
      this.comentarioService.getComentario(this.id).subscribe(datos =>{
        this.comentario=datos;
        this.agregarComentario.patchValue({
          titulo: datos.titulo,
          creador: datos.creador,
          texto: datos.texto

        })
      })
    }
  }

  agregarEditar(){
    if(this.comentario == undefined)
  {
    const comentario: Comentario= {
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('creador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion:  new Date
  
      }
     
       this.comentarioService.guardarComentario(comentario).subscribe(datos =>{
        this.router.navigate(['/']);
       })

  } else {

    const comentario: Comentario= {
      id: this.comentario.id,
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('creador')?.value,
      texto: this.agregarComentario.get('texto')?.value,
      fechaCreacion:  this.comentario.fechaCreacion
  
      }

    this.comentarioService.actualizarComentarios(this.id,comentario).subscribe(datos =>{
      this.router.navigate(['/']);
    })
  }


    
  }

}
