import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/'
  URL = 'https://back-end-argentina-programa.herokuapp.com/personas/'
  constructor(private http: HttpClient) {  }

  public getPersona(): Observable<persona>{
  const dataPersona = this.http.get<persona>(this.URL+'traer/perfil')
  //console.log(dataPersona)
    return dataPersona
  }
}
