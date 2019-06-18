import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { ListalocComponent } from './listaloc/listaloc.component';
import { LocacaoComponent } from './locacao/locacao.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  {
    path: 'cliente/:id',
    component: ClienteComponent,
  },
  { 
    path: 'listacliente',
    component: ListaclienteComponent,
  },
  { 
    path: 'listaloc',
    component: ListalocComponent,
  },
  {
    path: 'listaloc/:id/:nome',
    component: ListalocComponent,
  },
  {
    path: 'locacao/:id',
    component: LocacaoComponent,
  },
  {
    path: 'locacao/:idcli/:nome',
    component: LocacaoComponent,
  },
  { 
    path: '',
    component: ListaclienteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }