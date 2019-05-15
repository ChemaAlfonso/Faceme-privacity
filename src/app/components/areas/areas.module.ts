import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TagsComponent } from './tags/tags.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { MegustaComponent } from './megusta/megusta.component';
import { SitiosComponent } from './sitios/sitios.component';
import { GenteComponent } from './gente/gente.component';
import { InteresesComponent } from './intereses/intereses.component';
import { PerfilComponent } from './perfil/perfil.component';

PerfilComponent
@NgModule({
  declarations: [
    PerfilComponent,
    TagsComponent,
    ComentariosComponent,
    MegustaComponent,
    SitiosComponent,
    GenteComponent,
    InteresesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PerfilComponent,
    TagsComponent,
    ComentariosComponent,
    MegustaComponent,
    SitiosComponent,
    GenteComponent,
    InteresesComponent
  ]
})
export class AreasModule { }
