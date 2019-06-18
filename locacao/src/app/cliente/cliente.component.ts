import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  	public pessoa = {nome:"",telefone:"",cpf:"",endereco:""};
	public pessoaAlt : any = {};

  	constructor(public router: Router, public http: HttpClient, private route: ActivatedRoute) {
		if (this.route.snapshot.paramMap.get("id") != null)
			this.carrega(this.route.snapshot.paramMap.get("id"));
  	}

	async carrega(id:string){
		this.pessoaAlt = JSON.parse(JSON.stringify(await this.http.get("http://127.0.0.1:8080/api/pessoa/" + id).toPromise()));
		console.log(this.pessoaAlt);

		this.pessoa = this.pessoaAlt;
	}

  	async salvar(){
      	if (this.pessoa.nome == ""){
        	alert("Nome deve ser informado.");
        	return;
      	}

      	if (this.pessoa.cpf == ""){
        	alert("CPF deve ser informado.");
        	return;
		}
		
		if (this.route.snapshot.paramMap.get("id") != null){
			await this.http.put("http://127.0.0.1:8080/api/pessoa/" + this.route.snapshot.paramMap.get("id"), this.pessoa).toPromise();
		} else {
			await this.http.post("http://127.0.0.1:8080/api/pessoa", this.pessoa).toPromise();
		}

		this.router.navigate(['']);
  	}

	retornar(){
		this.router.navigate(['listacliente']);
	}

  	ngOnInit() {
  	}
}
