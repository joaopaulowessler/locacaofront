import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent implements OnInit {

  constructor(public navCtrl : NavigationStart) { }

  teste(){
      
  }

  ngOnInit() {
  }

}
