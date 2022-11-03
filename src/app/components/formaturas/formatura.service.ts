import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import
@Injectable({
  providedIn: 'root'
})
export class FormaturaService {

  private readonly API = 'http://localhost:3000/api/formatura'

  constructor( private http:HttpClient) {  };
  listar(){
    return this.http.get<Formatura[]>(this.API)
  }
}
