import { Component, OnInit } from '@angular/core';

import { Comentario } from 'src/app/interfaces/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  listComentarios: Comentario[]=[]
 
 

  constructor(private comentarioService: ComentarioService ) { }

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios(){
    this.comentarioService.getListComentarios().subscribe(datos => {
      console.log(datos);
      this.listComentarios= datos;
    });  
 }

 eliminarComentario(id: any){
  this.comentarioService.deleteComentario(id).subscribe(datos =>{
    this.getComentarios();
  })
 }

}
