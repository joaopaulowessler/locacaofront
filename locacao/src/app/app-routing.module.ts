import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ListaclienteComponent } from './listacliente/listacliente.component';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent,
  },
  { 
    path: '',
    component: ListaclienteComponent,
    /*redirectTo: '/listacliente',
    pathMatch: 'full'*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }