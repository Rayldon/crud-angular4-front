import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {

  constructor(private http: Http) { 

  }

  getPessoas(): Observable<Pessoa[]> {
    return this.http
        .get("http://172.25.141.68:8080/crud/rest/pessoa/consulta")
        .map(response => response.json())
        .catch(this.handleError);
  }

  private handleError(error: Response) {
      return Observable.throw(error.statusText);
  }
}
