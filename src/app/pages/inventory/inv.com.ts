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
  busqueda: string = ''; // 👈 YA CREADA

  constructor(private servicio: InventarioService, private router: Router) {}

  ngOnInit() {
    this.cargarInventario();
  }

  cargarInventario() {
    this.servicio.listar().subscribe({
      next: (data) => (this.equipos = data),
      error: (err) => console.error('Error al cargar', err),
    });
  }

  irAgregar() {
    this.router.navigate(['/agregar']);
  }

  irEditar(id: number | undefined) {
    // 👈 ya acepta undefined
    if (!id) return;
    this.router.navigate(['/editar', id]);
  }

  eliminar(id: number | undefined) {
    // 👈 igual aquí
    if (!id) return;
    if (confirm('¿Seguro que deseas eliminar?')) {
      this.servicio.eliminar(id).subscribe(() => this.cargarInventario());
    }
  }

  // 🔍 FILTRO SIN PIPE 😎
  equiposFiltrados() {
    return this.equipos.filter((item) =>
      item.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
