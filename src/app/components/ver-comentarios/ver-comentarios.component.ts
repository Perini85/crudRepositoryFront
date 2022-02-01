import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-ver-comentarios',
  templateUrl: './ver-comentarios.component.html',
  styleUrls: ['./ver-comentarios.component.css']
})
export class VerComentariosComponent implements OnInit {
  id: number;
  comentario: any;

  constructor(private aRoute: ActivatedRoute, private comentarioService: ComentarioService) {
    this.aRoute.snapshot.paramMap.get('id')
    this.id= +this.aRoute.snapshot.paramMap.get('id')!;
   }

  ngOnInit(): void {
    this.getComentario()
  }

  getComentario(){
   this.comentarioService.getComentario(this.id).subscribe(datos =>{
   this.comentario = datos
   })
  }

}
