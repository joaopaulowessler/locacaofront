import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-locacao',
  templateUrl: './locacao.component.html',
  styleUrls: ['./locacao.component.css']
})
export class LocacaoComponent implements OnInit {

	public locacao = {id_pessoa:"",valor:"",data: "",carro:"",status:0};
  	public locacaoAlt : any = {};
	public nome : string;

  	constructor(public router: Router, public http: HttpClient, private route: ActivatedRoute) {
		
		if (this.route.snapshot.paramMap.get("nome") != null)
			this.nome = this.route.snapshot.paramMap.get("nome");

		if (this.route.snapshot.paramMap.get("idcli") != null)
			this.locacao.id_pessoa = this.route.snapshot.paramMap.get("idcli");
  	}

	async carrega(id:string){
		this.locacaoAlt = JSON.parse(JSON.stringify(await this.http.get("http://127.0.0.1:8080/api/locacao/" + id).toPromise()));
		this.locacao = this.locacaoAlt;
	}

  	async salvar(){
		
		if (this.route.snapshot.paramMap.get("id") != null){
			await this.http.put("http://127.0.0.1:8080/api/locacao/" + this.route.snapshot.paramMap.get("id"), this.locacao).toPromise();
		} else {
			await this.http.post("http://127.0.0.1:8080/api/locacao", this.locacao).toPromise();
		}

		this.router.navigate(['listaloc', this.route.snapshot.paramMap.get("idcli"), this.route.snapshot.paramMap.get("nome")]);
  	}

	retornar(){
		this.router.navigate(['listaloc', this.route.snapshot.paramMap.get("idcli"), this.route.snapshot.paramMap.get("nome")]);
	}

  	ngOnInit() {
  	}
}
