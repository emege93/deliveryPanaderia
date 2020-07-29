import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  API_URI = 'http://localhost:5000/json';

  constructor(private http: HttpClient) { }

  getDirecciones() {
    return this.http.get(`${this.API_URI}/direcciones`)
  }

}
