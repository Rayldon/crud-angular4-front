import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { PessoaService } from './pessoa.service';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  private _pessoas: Pessoa[];
  
  public get pessoas() : Pessoa[] {
    console.log('getPessoas')
    return this._pessoas
  }
  
  public set pessoas(v : Pessoa[]) {
    this._pessoas = v;
  }
  
  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.pessoaService.getPessoas().subscribe(data => {
      this.pessoas = data;
      console.log(this.pessoas)
    });
  }
}
