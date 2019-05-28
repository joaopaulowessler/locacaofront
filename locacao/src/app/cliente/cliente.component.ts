import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  	public pessoa = {nome:"",telefone:"",cpf:"",endereco:""};

  	constructor() {
  	}

  	salvar(){
      	if (this.pessoa.nome == ""){
        	alert("Nome deve ser informado.");
        	return;
      	}

      	if (this.pessoa.cpf == ""){
        	alert("CPF deve ser informado.");
        	return;
      	}
  	}

  	ngOnInit() {
  	}

}
