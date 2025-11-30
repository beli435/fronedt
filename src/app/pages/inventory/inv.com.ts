import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inv.com.html',
  styleUrls: ['./inv.com.css'],
})
export class InventoryComponent {
  equipos = [
    { id: 1, nombre: 'Microscopio', estado: 'Disponible' },
    { id: 2, nombre: 'Cautín', estado: 'En uso' },
    { id: 3, nombre: 'Osciloscopio', estado: 'Dañado' },
  ];

  constructor(private router: Router) {}

  irAgregar() {
    this.router.navigate(['/agregar']);
  }

  irEditar(id: number) {
    this.router.navigate(['/editar', id]);
  }

  eliminar(id: number) {
    this.equipos = this.equipos.filter((e) => e.id !== id);
  }
}
