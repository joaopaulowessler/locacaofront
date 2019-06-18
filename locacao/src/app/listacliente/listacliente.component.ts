import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent implements OnInit {

	public pessoa: Array<{ _id: string; cpf: string; endereco: string; nome: string; telefone: string; }> = [];

  	constructor(public router: Router, public http: HttpClient) {
		this.carregaLista();
	}

	async carregaLista(){
		this.pessoa = [];
		this.pessoa = JSON.parse(JSON.stringify(await this.http.get("http://127.0.0.1:8080/api/pessoa").toPromise()));
		console.log(this.pessoa);
	}

	async excluir(id:string){
		await this.http.delete("http://127.0.0.1:8080/api/pessoa/" + id).toPromise();
		this.carregaLista();
	}

	alterar(id:string){
		this.router.navigate(['cliente', id]);
	}

	incluir(){
		this.router.navigate(['cliente']);
  	}

	locacao(id:string, nome:string){
		this.router.navigate(['listaloc', id, nome]);
	}

	async exportar(){
		await this.http.get("http://127.0.0.1:8080/api/locacao/report").toPromise();
	}

  	ngOnInit() {
  	}
}
