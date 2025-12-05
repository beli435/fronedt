import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService, Equipo } from '../../services/inventario.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  templateUrl: './inv.com.html',
  styleUrls: ['./inv.com.css'],
  imports: [CommonModule, FormsModule],
})
export class InventoryComponent implements OnInit {
  equipos: Equipo[] = [];
  busqueda: string = '';

  constructor(private servicio: InventarioService, private router: Router) {}

  ngOnInit() {
    this.cargarInventario();
  }

  // 🔵 Cargar todos los equipos desde la API
  cargarInventario() {
    this.servicio.listar().subscribe({
      next: (data: Equipo[]) => (this.equipos = data),
      error: (err) => console.error('Error al cargar inventario', err),
    });
  }

  // 🔵 Ir a agregar
  irAgregar() {
    this.router.navigate(['/agregar']);
  }

  // 🔵 Ir a editar
  irEditar(id: number | undefined) {
    if (!id) return;
    this.router.navigate(['/editar', id]);
  }

  // 🔵 Eliminar equipo
  eliminar(id: number | undefined) {
    if (!id) return;

    if (confirm('¿Seguro que deseas eliminar?')) {
      this.servicio.eliminar(id).subscribe({
        next: () => this.cargarInventario(),
        error: () => alert('Error al eliminar'),
      });
    }
  }

  // 🔍 Buscar equipos
  equiposFiltrados() {
    return this.equipos.filter((item) =>
      item.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
