import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Persona } from './persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaRESTService {

  constructor(private cliente:HttpClient) { }

  public buscarTodos():Observable<Persona[]>  {

    return this.cliente.get<Persona[]>("http://localhost:8081/webapi/personas");
  }


  public buscarUno(dni:String):Observable<Persona>  {

    return this.cliente.get<Persona>(`http://localhost:8081/webapi/personas/${dni}`);

  }
  public borrar(persona:Persona):Observable<Persona> {
    return this.cliente.delete<Persona>(`http://localhost:8081/webapi/personas/${persona.dni}`);
  }
  public insertar(persona:Persona):Observable<Persona> {
    return this.cliente.post<Persona>(`http://localhost:8081/webapi/personas`,persona);
  }

  public salvar(persona:Persona):Observable<Persona> {
    return this.cliente.put<Persona>(`http://localhost:8081/webapi/personas/${persona.dni}`,persona);
  }
}
