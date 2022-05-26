import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaRESTService {

  constructor(private cliente:HttpClient) { }

  public buscarTodos()  {

    return this.cliente.get<Persona[]>("http://localhost:8081/webapi/personas").toPromise();
  }
}
