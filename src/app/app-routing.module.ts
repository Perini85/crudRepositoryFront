import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregareditarComentarioComponent } from './components/agregareditar-comentario/agregareditar-comentario.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes: Routes = [
  {path: '',component:ListComentariosComponent},
  {path: 'agregar',component:AgregareditarComentarioComponent},
  {path: 'editar/:id',component:AgregareditarComentarioComponent},
  {path: 'ver/:id',component:VerComentariosComponent},
  {path: '',redirectTo:'/', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
