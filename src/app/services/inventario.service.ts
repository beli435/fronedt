import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipo {
  id?: number;
  nombre: string;
  cantidad: number;
  fechaIngreso: string;
  categoria: string;
  descripcion: string;
  ubicacion: string;
  responsable: string;
  imagen: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class InventarioService {

  private api = 'http://localhost:3000/api/reparaciones';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.api);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  agregar(data: any): Observable<any> {
    return this.http.post<any>(this.api, data);
  }

  actualizar(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.api}/${id}`, data);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}