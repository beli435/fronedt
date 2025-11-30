import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Equipo {
  id?: number;
  nombre: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  private api = 'http://localhost:3000/inventario'; // ajusta si tu API usa otra ruta/puerto

  constructor(private http: HttpClient) {}

  listar(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.api);
  }

  obtenerPorId(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.api}/${id}`);
  }

  agregar(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(this.api, equipo);
  }

  actualizar(id: number, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.api}/${id}`, equipo);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }
}
