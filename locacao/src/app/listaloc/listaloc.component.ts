import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-listaloc',
  templateUrl: './listaloc.component.html',
  styleUrls: ['./listaloc.component.css']
})
export class ListalocComponent implements OnInit {

  	public locacao: Array<{ _id: string; id_pessoa: string; valor: number; data: string; carro: string; valor_dolar: number; status: number, cor:string}> = [];
	public locacaoAlt : any = {};

	public id:string;
	public nome:string;

  	constructor(public router: Router, public http: HttpClient, private route: ActivatedRoute) {
		this.id = this.route.snapshot.paramMap.get("id");
		this.nome = this.route.snapshot.paramMap.get("nome");
		this.carregaLista();
	}

	async carregaLista(){
		this.locacao = [];
		this.locacao = JSON.parse(JSON.stringify(await this.http.get("http://127.0.0.1:8080/api/locacao/pessoa/" + this.id).toPromise()));

		for (var i = 0; i < this.locacao.length; i++){

			if (this.locacao[i].status == 1)
				this.locacao[i].cor = "#FFF5EE";
			else 
				this.locacao[i].cor = "#F0F8FF";
		}
	}

	async excluir(id:string){
		await this.http.delete("http://127.0.0.1:8080/api/locacao/" + id).toPromise();
		this.carregaLista();
	}

	async concluir(id:string){
		this.locacaoAlt = JSON.parse(JSON.stringify(await this.http.get("http://127.0.0.1:8080/api/locacao/" + id).toPromise()));
		if (this.locacaoAlt.status == 1){
			alert("Locação já encerrada");
			return;
		}

		this.locacaoAlt.status = 1;
		
		await this.http.put("http://127.0.0.1:8080/api/locacao/" + id, this.locacaoAlt).toPromise();

		this.carregaLista();
	}

	incluir(id:string, nome:string){
		this.router.navigate(['locacao', id, nome]);
	}
	
	retornar(){
		this.router.navigate(['listacliente']);
	}

	ngOnInit() {
  	}
}
